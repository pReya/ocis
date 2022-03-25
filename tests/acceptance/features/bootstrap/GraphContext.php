<?php declare(strict_types=1);
/**
 * ownCloud
 *
 * @author Kiran Parajuli <kiran@jankaritech.com>
 * @copyright Copyright (c) 2021 Kiran Parajuli kiran@jankaritech.com
 */

use Behat\Behat\Context\Context;
use Behat\Behat\Hook\Scope\BeforeScenarioScope;
use Behat\Gherkin\Node\TableNode;
use TestHelpers\HttpRequestHelper;
use TestHelpers\GraphHelper;
use GuzzleHttp\Exception\GuzzleException;
use PHPUnit\Framework\Assert;

require_once "bootstrap.php";

/**
 * Context for the provisioning specific steps using the Graph API
 */
class GraphContext implements Context {
    /**
     * @var FeatureContext
     */
    private $featureContext;

    /**
     * @When /^the administrator sends a user creation request for user "([^"]*)" password "([^"]*)" using the graph API$/
     *
     * @param string $user
     * @param string $password
     *
     * @return void
     * @throws Exception
     */
    public function adminSendsUserCreationRequestUsingTheProvisioningApi(string $user, string $password):void {
        $response = GraphHelper::createUser(
            $this->featureContext->getBaseUrl(),
            $this->featureContext->getStepLineRef(),
            $this->featureContext->getAdminUsername(),
            $this->featureContext->getAdminPassword(),
            $user,
            $password
        );
        $this->featureContext->setResponse($response);
        $this->featureContext->pushToLastStatusCodesArrays();
        $success = $this->featureContext->theHTTPStatusCodeWasSuccess();
        $this->featureContext->addUserToCreatedUsersList(
            $user,
            $password,
            null,
            ,
            $success
        );
    }




    /**
     * This will run before EVERY scenario.
     * It will set the properties for this object.
     *
     * @BeforeScenario
     *
     * @param BeforeScenarioScope $scope
     *
     * @return void
     */
    public function before(BeforeScenarioScope $scope):void {
        // Get the environment
        $environment = $scope->getEnvironment();
        // Get all the contexts you need in this context
        $this->featureContext = $environment->getContext('FeatureContext');
    }
}
