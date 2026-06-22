---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v1)"
domain: "Analysis Model"
element_id: 1548348
diagrams: 1
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 GetReportRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v1)

## 🔗 Connections (8)

- → Dependency: [[ReportRequestDto]]
- → Dependency: [[PackagingType]]
- → Dependency: [[ResponseType]]
- → Dependency: [[ModeType]]
- → Dependency: [[OutputFormatType]]
- → Dependency: [[ProcessingType]]
- → Dependency: [[PriorityType (Class 1548349)]]
- ← Dependency: [[ReportWS (v1) (Interface 1548344)]]

## 📊 Appears In (1 diagrams)

- Logical: ReportWS (v1)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| SystemId | string |  |
| UserId | string |  |
| Mode | ModeType |  |
| Packaging | PackagingType |  |
| OutputFormat | OutputFormatType |  |
| Processing | ProcessingType |  |
| DocumentId | string |  |
| RequestDescription | string |  |
| NotificationEmail | string |  |
| OutputFileName | string |  |
| CabinetUuid | string |  |
| DocumentFolder | string |  |
| Priority | PriorityType |  |
| ReportRequest | ReportRequestDto |  |
| ResponseType | ResponseType |  |
| Collated | boolean | FALSE |
