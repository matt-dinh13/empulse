---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v3)"
domain: "Analysis Model"
element_id: 1548992
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ConcatenatedReportRequestType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v3)

## 🔗 Connections (3)

- ← Dependency: [[CabinetReportRequestType]]
- → Dependency: [[ReportParameterType]]
- ← Dependency: [[ConcatenatedReportRequestListType]]

## 📊 Appears In (1 diagrams)

- Logical: ReportWS (v3)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ReportTemplateName | string |  |
| LanguageCode | string |  |
| ReportData | base64Binary |  |
| SelectExpression | string | /*[1] |
| XmlDatePattern | string | yyyy-MM-dd |
| ReportParameter | ReportParameterType |  |
| CopyCount | int | 1 |
