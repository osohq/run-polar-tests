# Run Oso Cloud Polar tests

## Summary

GitHub Action that uses the [Oso Cloud](https://www.osohq.com/)
[CLI](https://www.osohq.com/docs/reference/client-apis/cli)
to run all [polar](https://www.osohq.com/docs/tutorials/quickstart)
tests in the current repository.

Currently searches for all `.polar` files that are not symlinks,
in order to prevent errors caused by duplicating syntax.

All `.polar` files that compose the policy must be tested together,
because rules in one polar file may refer to entities that are
defined in another.

Polar tests are unit tests for your authorization code in Oso Cloud.
For a detailed overview of Polar tests, please see the Oso Cloud
[policy tests guide](https://www.osohq.com/docs/guides/develop/policy-tests).

The Oso Cloud CLI should be installed on the runner before using this action.
Use the setup-oso-cloud action to do this.

## Environment Variables

__OSO_AUTH__:  API Key for the Oso Cloud environment to use for tests.
Can be aread-only key.
The environment's policy code will not be overwritten.

```bash

env:
  OSO_AUTH: ${{ secrets.YOUR_OSO_CLOUD_API_KEY_SECRET_NAME }}

```

## Inputs

none

## Outputs

none

Succeeds if the `oso-cloud test` command succeeds, fails otherwise.
