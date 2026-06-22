---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1868563
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Contract Service Parameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Parameter of particular Loan Service assigned to Contract (Contract Service entity), e.g. expected Gift payment date.
Allowed data type values:
DATA_TYPE                                        DB column
java.math.BigDecimal                    DECIMAL_VALUE
java.util.Date                                     DATE_VALUE
java.lang.Long                                   LONG_VALUE
java.lang.String                                 STRING_VALUE

## 🔗 Connections (2)

- → Aggregation: [[Contract Service (Class 1868570)]]
- → Dependency: [[Contract Service Parameter Type]]

## 📊 Appears In (2 diagrams)

- Logical: Contract - Services
- Logical: Contract Service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | Contract Service Parameter Type |  |
| Value |  |  |
