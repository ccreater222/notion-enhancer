'use strict';
const ga = require('global-agent')
ga.createGlobalProxyAgent({
  environmentVariableNamespace: "Notion_",
  forceGlobalAgent: true,
  socketConnectionTimeout: 60000,
})