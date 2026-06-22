---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v3)"
domain: "Analysis Model"
element_id: 1549005
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 SingleReportRequestType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/ReportWS/ReportWS (v3)

## 🔗 Connections (2)

- → Dependency: [[ReportParameterType]]
- ← Dependency: [[SingleReportRequestListType]]

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
| RequestId | string |  |
| OutputFileName | string |  |
