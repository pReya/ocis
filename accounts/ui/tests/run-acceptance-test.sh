#!/bin/bash

if [ -z "$WEB_PATH" ]
then
	echo "WEB_PATH env variable is not set, cannot find files for tests infrastructure"
	exit 1
fi

if [ -z "$WEB_UI_CONFIG" ]
then
	echo "WEB_UI_CONFIG env variable is not set, cannot find web config file"
	exit 1
fi

if [ -z "$1" ]
then
	echo "Features path not given, exiting test run"
	exit 1
fi

trap clean_up SIGHUP SIGINT SIGTERM

if [ -z "$TEST_INFRA_DIRECTORY" ]
then
	cleanup=true
	testFolder=$(mktemp -d -p .)
	printf "creating folder $testFolder for Test infrastructure setup\n\n"
	export TEST_INFRA_DIRECTORY=$(realpath $testFolder)
fi

clean_up() {
	if $cleanup
	then
		if [ -d "$testFolder" ]; then
			printf "\n\n\n\nDeleting folder $testFolder Test infrastructure setup..."
			rm -rf "$testFolder"
		fi
	fi
}

trap clean_up SIGHUP SIGINT SIGTERM EXIT

cp -r $(ls -d "$WEB_PATH"/tests/acceptance/* | grep -v 'node_modules') "$testFolder"

set -evax

export SERVER_HOST=${SERVER_HOST:-https://localhost:9200}
export BACKEND_HOST=${BACKEND_HOST:-https://localhost:9200}
export TEST_TAGS=${TEST_TAGS:-"not @skip"}

export CUCUMBER_OPTS="--require ${TEST_INFRA_DIRECTORY}/setup.js --require /drone/src/accounts/ui/tests/acceptance/stepDefinitions --require ${TEST_INFRA_DIRECTORY}/stepDefinitions"

cd /srv/app/web/tests/acceptance/
yarn test:acceptance:external -- ${CUCUMBER_OPTS}

status=$?
exit $status
