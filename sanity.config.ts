import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
  // Get this from the Sanity project dashboard
  projectId: 'd2cqckcf',
  dataset: 'production',
  title: 'sanity-cms-test',
  // Can put any date here. Sanity works out the closest match
  apiVersion: '2024-11-20',
  // URL where the Studio can be accessed from
  basePath: '/admin',
  // Define what core Studio tools should be available here
  plugins: [structureTool(), visionTool()],
});

export default config;
