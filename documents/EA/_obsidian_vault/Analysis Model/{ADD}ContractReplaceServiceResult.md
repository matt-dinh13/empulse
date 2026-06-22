---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Account Pricing"
domain: "Analysis Model"
element_id: 1521176
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ContractReplaceServiceResult

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Account Pricing

## 📝 Notes

{ADD CLM-2981 /}
Request to replace a service for a contract

## 🔗 Connections (1)

- ← Usage: [[{ADD}ReplaceServiceResponse]]

## 📊 Appears In (1 diagrams)

- Logical: ReplaceService

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceCode | string |  |
| replacedServiceCode | string |  |
| serviceVersion | int |  |
| status | string |  |
| contractCode | string |  |
| serviceStatus | string |  |
| errorMessage | string |  |
| replacedServiceVersion | int |  |
