<?php declare(strict_types=1);
/**
 * ownCloud
 *
 * @author Kiran Parajuli <kiran@jankaritech.com>
 * @copyright Copyright (c) 2022 Kiran Parajuli kiran@jankaritech.com
 */

namespace TestHelpers;

use Exception;

/**
 * A helper class for managing users and groups using the Graph API
 */
class GraphHelper {
    private static function sendHttpRequest(
        string $baseUrl,
        string $xRequestId,
        string $user,
        string $password,
        ?string $method = "GET",
        ? string $path = '',
        ?array $body = null,
        ?array $headers = null
    ) {
        $fullUrl = $baseUrl;
        if (\substr($fullUrl, -1) !== '/') $fullUrl .= '/';
        $fullUrl .= 'graph/v1.0/' . $path;
        return HttpRequestHelper::sendRequest(
            $fullUrl,
            $xRequestId,
            $method,
            $user,
            $password,
            $headers,
            $body
        );
    }
    public static function createUser(
        string $baseUrl,
        string $xRequestId,
        string $adminUser,
        string $adminPassword,
        string $userName,
        string $password,
        ?string $email = null,
        ?string $displayName = null
    ) {
        $payload = [];
        if ($displayName) $payload['displayName'] = $displayName;
        if ($email) $payload['mail'] = $email;
        if ($userName) $payload['onPremisesSamAccountName'] = $userName;
        if ($password) $payload['passwordProfile'] = ['password' => $password];

        return self::sendHttpRequest(
            $baseUrl,
            $xRequestId,
            $adminUser,
            $adminPassword,
            "POST",
            "users",
            $payload
        );
    }
}
