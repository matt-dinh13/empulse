---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Statement Management/GetAvailableStatements"
domain: "Analysis Model"
element_id: 1226628
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetAvailableStatementsPeriodFilter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Statement Management/GetAvailableStatements

## 🔗 Connections (2)

- → Association: [[DateRangeDto (Class 1226632)]]
- ← Association: [[GetAvailableStatementsRequest]]

## 📊 Appears In (1 diagrams)

- Logical: GetAvailableStatements

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| statementTypeCode | StatementTypeCodeType |  |
| articleSource | SourceSystemEnumDto |  |
| articleNumber | ArticleNumberType |  |
| periodEndRange | DateRangeDto |  |
