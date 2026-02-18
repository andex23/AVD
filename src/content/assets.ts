export interface CanvaAsset {
  key: string;
  path: string;
  alt: string;
  width: number;
  height: number;
  purpose: string;
}

export const canvaAssetManifest: CanvaAsset[] = [
  {
    key: "heroDesktopMockup",
    path: "/images/hero/hero-desktop-mockup.svg",
    alt: "Desktop website homepage mockup for AVD",
    width: 1280,
    height: 800,
    purpose: "Home hero primary visual",
  },
  {
    key: "heroMobileMockup",
    path: "/images/hero/hero-mobile-mockup.svg",
    alt: "Mobile website homepage mockup for AVD",
    width: 420,
    height: 860,
    purpose: "Home hero secondary visual",
  },
  {
    key: "crmStatusOverlay",
    path: "/images/hero/crm-status-overlay.svg",
    alt: "CRM pipeline status panel overlay",
    width: 420,
    height: 240,
    purpose: "Home hero CRM connected card",
  },
  {
    key: "automationBadge",
    path: "/images/hero/automation-badge.svg",
    alt: "Automation active badge overlay",
    width: 220,
    height: 90,
    purpose: "Home hero automation indicator",
  },
  {
    key: "projectMockOne",
    path: "/images/projects/project-atlas-website.svg",
    alt: "Atlas Health corporate website project mock",
    width: 1200,
    height: 760,
    purpose: "Work card and case study visual",
  },
  {
    key: "projectMockTwo",
    path: "/images/projects/project-northstar-portal.svg",
    alt: "Northstar Ventures lead portal project mock",
    width: 1200,
    height: 760,
    purpose: "Work card and case study visual",
  },
  {
    key: "projectMockThree",
    path: "/images/projects/project-riverstone-commerce.svg",
    alt: "Riverstone Retail ecommerce project mock",
    width: 1200,
    height: 760,
    purpose: "Work card and case study visual",
  },
  {
    key: "projectMockFour",
    path: "/images/projects/project-summit-dashboard.svg",
    alt: "Summit Education admissions site project mock",
    width: 1200,
    height: 760,
    purpose: "Work card and case study visual",
  },
  {
    key: "systemsWorkflow",
    path: "/images/systems/workflow-diagram.svg",
    alt: "Lead form to CRM to automation workflow diagram",
    width: 1280,
    height: 520,
    purpose: "Systems page workflow visual",
  },
  {
    key: "systemsCrmPipeline",
    path: "/images/systems/crm-pipeline-preview.svg",
    alt: "CRM pipeline with lead stages and metrics",
    width: 1200,
    height: 620,
    purpose: "Systems page CRM architecture visual",
  },
];

export function getAssetByKey(key: string) {
  return canvaAssetManifest.find((asset) => asset.key === key);
}
