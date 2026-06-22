---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v1)"
domain: "Analysis Model"
element_id: 1548350
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ReportRequestDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v1)

## 🔗 Connections (4)

- → Dependency: [[DocumentMetadataDto]]
- → Dependency: [[XMLDataDto]]
- → Dependency: [[ParamReqDto]]
- ← Dependency: [[GetReportRequest]]

## 📊 Appears In (1 diagrams)

- Logical: ReportWS (v1)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| LanguageCode | string |  |
| ValidAt | date |  |
| CopyCount | int | 1 |
| OutputFileName | string |  |
| ParamReq | ParamReqDto |  |
| RequestId | string |  |
| DocumentMetadata | DocumentMetadataDto |  |
| XMLData | XMLDataDto |  |
