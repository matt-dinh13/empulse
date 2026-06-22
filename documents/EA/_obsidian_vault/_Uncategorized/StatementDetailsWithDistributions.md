---
type: Class
stereotype: "XSDcomplexType"
package: ""
domain: "_Uncategorized"
element_id: 1226625
diagrams: 0
connections: 3
tags:
  - class
  - _uncategorized
---

# 🔷 StatementDetailsWithDistributions

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: N/A

## 🔗 Connections (3)

- → Association: [[SmsDistributionChannel]]
- → Association: [[EmailDistributionChannel]]
- → Association: [[PrintingAgencyDistributionChannel]]

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| articleSource | ArticleSourceType |  |
| articleNumber | SourceSystemEnumDto |  |
| periodStart | date |  |
| periodEnd | date |  |
| dataFileName | string |  |
| ignoreDueToError | boolean | False |
| distributionChannels |  |  |
