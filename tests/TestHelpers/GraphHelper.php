<?php declare(strict_types=1);
/**
 * ownCloud
 *
 * @author Kiran Parajuli <kiran@jankaritech.com>
 * @copyright Copyright (c) 2022 Kiran Parajuli kiran@jankaritech.com
 */

namespace TestHelpers;

use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Psr\Http\Message\ResponseInterface;

/**
 * A helper class for managing users and groups using the Graph API
 */
class GraphHelper {
    public static function isTestingWithGraphApi(): bool {
        return \getenv('TEST_WITH_GRAPH_API') === 'true';
    }
    /**
     * @param string $baseUrl
     * @param string $path
     *
     * @return string
     */
    private static function getFullUrl(string $baseUrl, string $path):string {
        $fullUrl = $baseUrl;
        if (\substr($fullUrl, -1) !== '/') $fullUrl .= '/';
        $fullUrl .= 'graph/v1.0/' . $path;
        return $fullUrl;
    }


    /**
     * @param string $baseUrl
     * @param string $xRequestId
     * @param string $adminUser
     * @param string $adminPassword
     * @param string $userName
     * @param string $password
     * @param string|null $email
     * @param string|null $displayName
     *
     * @return ResponseInterface
     * @throws GuzzleException
     */
    public static function createUser(
        string $baseUrl,
        string $xRequestId,
        string $adminUser,
        string $adminPassword,
        string $userName,
        string $password,
        ?string $email = null,
        ?string $displayName = null
    ):ResponseInterface {
        $payload['onPremisesSamAccountName'] = $userName;
        $payload['passwordProfile'] = ['password' => $password];
        $payload['displayName'] = $displayName ?? $userName;
        $payload['mail'] = $email ?? $userName . '@example.com';

        $headers = ['Content-Type' => 'application/json'];
        $url = self::getFullUrl($baseUrl, 'users');
        return HttpRequestHelper::post(
            $url,
            $xRequestId,
            $adminUser,
            $adminPassword,
            $headers,
            json_encode($payload)
        );
    }

    /**
     * @param string $baseUrl
     * @param string $xRequestId
     * @param string $adminUser
     * @param string $adminPassword
     * @param string $userName
     *
     * @return ResponseInterface
     * @throws GuzzleException
     */
    public static function deleteUser(
        string $baseUrl,
        string $xRequestId,
        string $adminUser,
        string $adminPassword,
        string $userName
    ):ResponseInterface {
        $url = self::getFullUrl($baseUrl, 'users/' . $userName);
        return HttpRequestHelper::delete(
            $url,
            $xRequestId,
            $adminUser,
            $adminPassword,
        );
    }

    /**
     * @param string $baseUrl
     * @param string $xRequestId
     * @param string $adminUser
     * @param string $adminPassword
     * @param string $groupName
     *
     * @return ResponseInterface
     * @throws GuzzleException
     */
    public static function createGroup(
        string $baseUrl,
        string $xRequestId,
        string $adminUser,
        string $adminPassword,
        string $groupName
    ):ResponseInterface {
        $payload['displayName'] = $groupName;
        $headers = ['Content-Type' => 'application/json'];
        $url = self::getFullUrl($baseUrl, 'groups');
        return HttpRequestHelper::post(
            $url,
            $xRequestId,
            $adminUser,
            $adminPassword,
            $headers,
            json_encode($payload)
        );
    }

    /**
     * @throws Exception
     */
    public static function getGroups(
        string $baseUrl,
        string $xRequestId,
        string $adminUser,
        string $adminPassword
    ):array {
        $url = self::getFullUrl($baseUrl, 'groups');
        $response = HttpRequestHelper::get(
            $url,
            $xRequestId,
            $adminUser,
            $adminPassword
        );
        $groupsListEncoded = json_decode($response->getBody()->getContents(), true);
        if (!isset($groupsListEncoded['value'])) {
            throw new Exception('No groups found');
        } else return $groupsListEncoded['value'];
    }

    /**
     * @param string $baseUrl
     * @param string $xRequestId
     * @param string $adminUser
     * @param string $adminPassword
     * @param string $groupId
     *
     * @return ResponseInterface
     * @throws GuzzleException
     * @throws Exception
     */
    public static function deleteGroup(
        string $baseUrl,
        string $xRequestId,
        string $adminUser,
        string $adminPassword,
        string $groupId
    ):ResponseInterface {
        $url = self::getFullUrl($baseUrl, 'groups/' . $groupId);
        return HttpRequestHelper::delete(
            $url,
            $xRequestId,
            $adminUser,
            $adminPassword,
        );
    }
}
