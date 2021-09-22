// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(name) {
  // [START gkehub_generate_connect_manifest_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Membership resource name the Agent will associate with, in the format
   *  `projects/* /locations/* /memberships/*`.
   */
  // const name = 'abc123'
  /**
   *  Optional. The connect agent to generate manifest for.
   */
  // const connectAgent = ''
  /**
   *  Optional. The Connect agent version to use. Defaults to the most current version.
   */
  // const version = 'abc123'
  /**
   *  Optional. If true, generate the resources for upgrade only. Some resources
   *  generated only for installation (e.g. secrets) will be excluded.
   */
  // const isUpgrade = true
  /**
   *  Optional. The registry to fetch the connect agent image from. Defaults to
   *  gcr.io/gkeconnect.
   */
  // const registry = 'abc123'
  /**
   *  Optional. The image pull secret content for the registry, if not public.
   */
  // const imagePullSecretContent = 'Buffer.from('string')'

  // Imports the Gkehub library
  const {GkeHubMembershipServiceClient} =
    require('@google-cloud/gke-hub').v1beta1;

  // Instantiates a client
  const gkehubClient = new GkeHubMembershipServiceClient();

  async function generateConnectManifest() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await gkehubClient.generateConnectManifest(request);
    console.log(response);
  }

  generateConnectManifest();
  // [END gkehub_generate_connect_manifest_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
