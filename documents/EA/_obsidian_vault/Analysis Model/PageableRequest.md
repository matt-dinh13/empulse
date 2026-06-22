---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833311
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 PageableRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

Defines number of pages the response will be divided to and number of items (e.g. contracts in GetSalesroomContractsResponse) returned in one page.

## 🔗 Connections (1)

- ← Generalization «XSDextension»: [[GetSalesroomContractsRequest]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - GetSalesroomContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| page | int |  |
| size | int |  |
