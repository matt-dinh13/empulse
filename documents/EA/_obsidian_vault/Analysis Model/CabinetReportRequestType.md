---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v3)"
domain: "Analysis Model"
element_id: 1549004
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CabinetReportRequestType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v3)

## 🔗 Connections (3)

- → Dependency: [[DocumentMetadataType]]
- → Dependency: [[ConcatenatedReportRequestType]]
- → Generalization «XSDextension»: [[ReportRequestType]]

## 📊 Appears In (1 diagrams)

- Logical: ReportWS (v3)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ConcatenatedOutputFileName | string |  |
| Collated | boolean | FALSE |
| ConcatenatedReportRequest | ConcatenatedReportRequestType |  |
| DocumentMetadata | DocumentMetadataType |  |
| Uuid | string |  |
| DocumentFolder | string | /ps |
