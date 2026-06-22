---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v3)"
domain: "Analysis Model"
element_id: 1548984
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 GenerateReportRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v3)

## 🔗 Connections (6)

- → Dependency: [[ProcessingType (Class 1548998)]]
- → Dependency: [[ReportRequestType]]
- → Dependency: [[OutputFormatType (Class 1548996)]]
- → Dependency: [[ModeType (Class 1548988)]]
- → Dependency: [[PackagingType (Class 1549002)]]
- ← Dependency: [[ReportWS (v3) (Interface 1548981)]]

## 📊 Appears In (1 diagrams)

- Logical: ReportWS (v3)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| SystemId | string |  |
| UserId | string |  |
| Mode | ModeType | LIVE |
| Packaging | PackagingType | NORMAL |
| OutputFormat | OutputFormatType | PDF |
| Processing | ProcessingType | SYNCHRONOUS |
| NotificationEmail | string |  |
| ReportRequest | ReportRequestType |  |
| Certify | boolean | FALSE |
