/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

export const DEFAULTS = [
  {
    coverage: true,
    codeOwners: true,
  },
];

export const sourceOfTruth = [
  {
    // A comment with this goes before the codeowners path list for human readablilty
    title: 'App',
    // Each path in the path list will have 1 or more owners
    githubHandle: 'elastic/kibana-app',
    pathPatterns: [
      '/x-pack/plugins/dashboard_enhanced/',
      '/x-pack/plugins/discover_enhanced/',
      '/x-pack/plugins/lens/',
      '/x-pack/plugins/graph/',
      '/src/legacy/core_plugins/kibana/public/local_application_service/',
      '/src/plugins/dashboard/',
      '/src/plugins/discover/',
      '/src/plugins/input_control_vis/',
      '/src/plugins/kibana_legacy/',
      '/src/plugins/vis_default_editor/',
      '/src/plugins/vis_type_markdown/',
      '/src/plugins/vis_type_metric/',
      '/src/plugins/vis_type_table/',
      '/src/plugins/vis_type_tagcloud/',
      '/src/plugins/vis_type_timelion/',
      '/src/plugins/vis_type_timeseries/',
      '/src/plugins/vis_type_vega/',
      '/src/plugins/vis_type_vislib/',
      '/src/plugins/vis_type_xy/',
      '/src/plugins/visualize/',
    ],
  },
  {
    title: 'App Architecture',
    githubHandle: 'elastic/kibana-app-arch',
    pathPatterns: [
      '/examples/bfetch_explorer/',
      '/examples/dashboard_embeddable_examples/',
      '/examples/demo_search/',
      '/examples/developer_examples/',
      '/examples/embeddable_examples/',
      '/examples/embeddable_explorer/',
      '/examples/state_container_examples/',
      '/examples/ui_actions_examples/',
      '/examples/ui_actions_explorer/',
      '/examples/url_generators_examples/',
      '/examples/url_generators_explorer/',
      '/packages/elastic-datemath/',
      '/packages/kbn-interpreter/',
      '/src/plugins/advanced_settings/',
      '/src/plugins/bfetch/',
      '/src/plugins/data/',
      '/src/plugins/embeddable/',
      '/src/plugins/expressions/',
      '/src/plugins/inspector/',
      '/src/plugins/kibana_react/',
      '/src/plugins/kibana_utils/',
      '/src/plugins/management/',
      '/src/plugins/navigation/',
      '/src/plugins/share/',
      '/src/plugins/ui_actions/',
      '/src/plugins/visualizations/',
      '/x-pack/examples/ui_actions_enhanced_examples/',
      '/x-pack/plugins/data_enhanced/',
      '/x-pack/plugins/embeddable_enhanced/',
      '/x-pack/plugins/ui_actions_enhanced/',
    ],
  },
  {
    title: 'APM',
    githubHandle: 'elastic/apm-ui',
    pathPatterns: [
      '/x-pack/plugins/apm/',
      '/x-pack/test/functional/apps/apm/',
      '/src/legacy/core_plugins/apm_oss/',
      '/src/plugins/apm_oss/',
    ],
  },
  {
    title: 'Thomas Watson',
    githubHandle: 'watson',
    pathPatterns: [['/src/apm.js', { coverage: false }]],
  },
  {
    title: 'Vignesh Shanmugam',
    githubHandle: 'vigneshshanmugam',
    pathPatterns: [['/src/apm.js', { coverage: false }]],
  },
  {
    title: 'Beats',
    githubHandle: 'elastic/beats',
    pathPatterns: ['/x-pack/legacy/plugins/beats_management/'],
  },
  {
    title: 'Canvas',
    githubHandle: 'elastic/kibana-canvas',
    pathPatterns: [
      '/src/plugins/kibana_react/public/code_editor',
      '/x-pack/plugins/canvas/',
      '/x-pack/test/functional/apps/canvas/',
    ],
  },
  {
    title: 'Core UI',
    githubHandle: 'elastic/kibana-core-ui',
    pathPatterns: [
      // Exclude tutorials folder for now because they are not owned by Kibana app and most will move out soon
      '/src/plugins/home/public',
      '/src/plugins/home/server/*.ts',
      '/src/plugins/home/server/services/',
      // Exclude tutorial resources folder for now because they are not owned by Kibana app and most will move out soon
      '/src/legacy/core_plugins/kibana/public/home/*.ts',
      '/src/legacy/core_plugins/kibana/public/home/*.scss',
      '/src/legacy/core_plugins/kibana/public/home/np_ready/',
    ],
  },
  {
    title: 'Logs Metrics UI',
    githubHandle: 'elastic/logs-metrics-ui',
    pathPatterns: ['/x-pack/legacy/plugins/infra/', '/x-pack/plugins/infra/'],
  },
  {
    title: 'Ingest Management',
    githubHandle: 'elastic/ingest-management',
    pathPatterns: ['/x-pack/plugins/ingest_manager/', '/x-pack/legacy/plugins/ingest_manager/'],
  },
  {
    title: 'Observability UI',
    githubHandle: 'elastic/observability-ui',
    pathPatterns: ['/x-pack/plugins/observability/'],
  },
  {
    title: 'Stack Monitoring UI',
    githubHandle: 'elastic/stack-monitoring-ui',
    pathPatterns: ['/x-pack/legacy/plugins/monitoring/', '/x-pack/plugins/monitoring/'],
  },
  {
    title: 'Uptime',
    githubHandle: 'elastic/uptime',
    pathPatterns: ['/x-pack/plugins/uptime'],
  },
  {
    title: 'Machine Learning',
    githubHandle: 'elastic/ml-ui',
    pathPatterns: [
      '/x-pack/legacy/plugins/ml/',
      '/x-pack/plugins/ml/',
      '/x-pack/test/functional/apps/machine_learning/',
      '/x-pack/test/functional/services/machine_learning/',
      '/x-pack/test/functional/services/ml.ts',
      // ML team owns and maintains the transform plugin despite it living in the Elasticsearch management section.
      '/x-pack/plugins/transform/',
      '/x-pack/test/functional/apps/transform/',
      '/x-pack/test/functional/services/transform_ui/',
      '/x-pack/test/functional/services/transform.ts',
    ],
  },
  {
    title: 'Maps',
    githubHandle: 'elastic/kibana-gis',
    pathPatterns: [
      '/x-pack/legacy/plugins/maps/',
      '/x-pack/plugins/maps/',
      '/x-pack/test/api_integration/apis/maps/',
      '/x-pack/test/functional/apps/maps/',
      '/x-pack/test/functional/es_archives/maps/',
      '/x-pack/test/visual_regression/tests/maps/index.js',
    ],
  },
  {
    title: 'Operations',
    githubHandle: 'elastic/kibana-operations',
    pathPatterns: [
      '/src/dev/',
      '/src/setup_node_env/',
      '/src/optimize/',
      '/packages/*eslint*/',
      '/packages/*babel*/',
      '/packages/kbn-dev-utils*/',
      '/packages/kbn-es/',
      '/packages/kbn-optimizer/',
      '/packages/kbn-pm/',
      '/packages/kbn-test/',
      '/packages/kbn-ui-shared-deps/',
      '/packages/kbn-es-archiver/',
      '/src/legacy/server/keystore/',
      '/src/legacy/server/pid/',
      '/src/legacy/server/sass/',
      '/src/legacy/server/utils/',
      '/src/legacy/server/warnings/',
      '/.ci/es-snapshots/',
      '/vars/',
    ],
  },
  {
    title: 'Quality Assurance',
    githubHandle: 'elastic/kibana-qa',
    pathPatterns: [
      '/src/dev/code_coverage/',
      '/test/functional/services/common/',
      '/test/functional/services/lib/',
      '/test/functional/services/remote/',
    ],
  },
  {
    title: 'Platform',
    githubHandle: 'elastic/kibana-platform',
    pathPatterns: [
      '/src/core/',
      '/config/kibana.yml',
      '/x-pack/plugins/features/',
      '/x-pack/plugins/licensing/',
      '/x-pack/plugins/global_search/',
      '/x-pack/plugins/cloud/',
      '/x-pack/test/saved_objects_field_count/',
      '/packages/kbn-config-schema/',
      '/src/legacy/server/config/',
      '/src/legacy/server/http/',
      '/src/legacy/server/logging/',
      '/src/legacy/server/saved_objects/ ',
      '/src/legacy/server/status/',
      '/src/plugins/status_page/',
      '/src/plugins/saved_objects_management/',
      '/src/dev/run_check_published_api_changes.ts',
      '/src/core/server/csp/',
    ],
  },
  {
    title: 'Security',
    githubHandle: 'elastic/kibana-security',
    pathPatterns: [
      '/src/core/server/csp/',
      '/x-pack/legacy/plugins/security/',
      '/x-pack/legacy/plugins/spaces/',
      '/x-pack/plugins/spaces/',
      '/x-pack/plugins/encrypted_saved_objects/',
      '/x-pack/plugins/security/',
      '/x-pack/test/api_integration/apis/security/',
    ],
  },
  {
    title: 'Kibana Localization',
    githubHandle: 'elastic/kibana-localization',
    pathPatterns: [
      '/src/dev/i18n/',
      '/src/legacy/server/i18n/',
      '/src/core/public/i18n/',
      '/packages/kbn-i18n/',
    ],
  },
  {
    title: 'Kibana Telemetry',
    githubHandle: 'elastic/kibana-telemetry',
    pathPatterns: [
      '/packages/kbn-analytics/',
      '/packages/kbn-telemetry-tools/',
      '/src/plugins/kibana_usage_collection/',
      '/src/plugins/newsfeed/',
      '/src/plugins/telemetry/',
      '/src/plugins/telemetry_collection_manager/',
      '/src/plugins/telemetry_management_section/',
      '/src/plugins/usage_collection/',
      '/x-pack/plugins/telemetry_collection_xpack/',
      '/.telemetryrc.json',
      '/x-pack/.telemetryrc.json',
      'src/plugins/telemetry/schema/legacy_oss_plugins.json',
      'src/plugins/telemetry/schema/oss_plugins.json',
      'x-pack/plugins/telemetry_collection_xpack/schema/xpack_plugins.json',
    ],
  },
  {
    title: 'Kibana Alerting Services',
    githubHandle: 'elastic/kibana-alerting-services',
    pathPatterns: [
      '/x-pack/plugins/alerts/',
      '/x-pack/plugins/actions/',
      '/x-pack/plugins/event_log/',
      '/x-pack/plugins/task_manager/',
      '/x-pack/test/alerting_api_integration/',
      '/x-pack/test/plugin_api_integration/plugins/task_manager/',
      '/x-pack/test/plugin_api_integration/test_suites/task_manager/',
      '/x-pack/plugins/triggers_actions_ui/',
      '/x-pack/test/functional_with_es_ssl/apps/triggers_actions_ui/',
      '/x-pack/test/functional_with_es_ssl/fixtures/plugins/alerts/',
    ],
  },
  {
    title: 'Design',
    githubHandle: 'elastic/kibana-design',
    pathPatterns: ['**/*.scss'],
  },
  {
    title: 'App Search Frontend',
    githubHandle: 'elastic/app-search-frontend',
    pathPatterns: [
      // Enterprise Search
      '/x-pack/plugins/enterprise_search/',
      '/x-pack/test/functional_enterprise_search/',
    ],
  },
  {
    title: 'Workplace Search Frontend',
    githubHandle: 'elastic/workplace-search-frontend',
    pathPatterns: [
      // Enterprise Search
      '/x-pack/plugins/enterprise_search/',
      '/x-pack/test/functional_enterprise_search/',
    ],
  },
  {
    title: 'Enterprise Search Design',
    githubHandle: 'elastic/ent-search-design',
    pathPatterns: [
      // Enterprise Search
      '/x-pack/plugins/enterprise_search/**/*.scss',
    ],
  },
  {
    title: 'Elasticsearch UI',
    githubHandle: 'elastic/es-ui',
    pathPatterns: [
      '/src/plugins/dev_tools/',
      '/src/plugins/console/',
      '/src/plugins/es_ui_shared/',
      '/x-pack/legacy/plugins/cross_cluster_replication/',
      '/x-pack/plugins/index_lifecycle_management/',
      '/x-pack/legacy/plugins/index_management/',
      '/x-pack/legacy/plugins/license_management/',
      '/x-pack/legacy/plugins/rollup/',
      '/x-pack/legacy/plugins/snapshot_restore/',
      '/x-pack/legacy/plugins/upgrade_assistant/',
      '/x-pack/plugins/console_extensions/',
      '/x-pack/plugins/es_ui_shared/',
      '/x-pack/plugins/grokdebugger/',
      '/x-pack/plugins/index_management/',
      '/x-pack/plugins/license_management/',
      '/x-pack/plugins/painless_lab/',
      '/x-pack/plugins/remote_clusters/',
      '/x-pack/plugins/rollup/',
      '/x-pack/plugins/searchprofiler/',
      '/x-pack/plugins/snapshot_restore/',
      '/x-pack/plugins/upgrade_assistant/',
      '/x-pack/plugins/watcher/',
      '/x-pack/plugins/ingest_pipelines/',
    ],
  },
  {
    title: 'Endpoint App Team',
    githubHandle: 'elastic/endpoint-app-team',
    pathPatterns: [
      '/x-pack/plugins/endpoint/',
      '/x-pack/test/api_integration/apis/endpoint/',
      '/x-pack/test/endpoint_api_integration_no_ingest/',
      '/x-pack/test/security_solution_endpoint/',
      '/x-pack/test/functional/es_archives/endpoint/',
      '/x-pack/test/plugin_functional/plugins/resolver_test/',
      '/x-pack/test/plugin_functional/test_suites/resolver/',
      '/x-pack/plugins/security_solution/',
      '/x-pack/test/detection_engine_api_integration',
      '/x-pack/test/api_integration/apis/security_solution',
      '/x-pack/plugins/case',
      '/x-pack/plugins/lists',
    ],
  },
  {
    title: 'SIEM',
    githubHandle: 'elastic/siem',
    pathPatterns: [
      '/x-pack/plugins/endpoint/',
      '/x-pack/test/api_integration/apis/endpoint/',
      '/x-pack/test/endpoint_api_integration_no_ingest/',
      '/x-pack/test/security_solution_endpoint/',
      '/x-pack/test/functional/es_archives/endpoint/',
      '/x-pack/test/plugin_functional/plugins/resolver_test/',
      '/x-pack/test/plugin_functional/test_suites/resolver/',
      '/x-pack/plugins/security_solution/',
      '/x-pack/test/detection_engine_api_integration',
      '/x-pack/test/api_integration/apis/security_solution',
      '/x-pack/plugins/case',
      '/x-pack/plugins/lists',
    ],
  },
  {
    title: 'Security Intelligence And Analytics',
    githubHandle: 'elastic/security-intelligence-analytics',
    pathPatterns: [
      '/x-pack/plugins/security_solution/server/lib/detection_engine/rules/prepackaged_rules',
    ],
  },
];
