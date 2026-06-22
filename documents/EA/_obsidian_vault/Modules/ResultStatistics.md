---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Provided/Rabbit/csi.bsa.processing-result"
domain: "Modules"
element_id: 1861255
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ResultStatistics

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Provided/Rabbit/csi.bsa.processing-result

## 📝 Notes

A message generated for bulk operation after creation or any change of status

## 🔗 Connections (2)

- ← Dependency: [[OperationProcessingResult]]
- ← Dependency: [[OperationProcessingResult]]

## 📊 Appears In (1 diagrams)

- Logical: csi.bsa.processing-result

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OPERATION_NOT_ALLOWED | int |  |
| OK | int |  |
| IN_QUEUE | int |  |
| NOT_STARTED | int |  |
| OTHER_ERROR | int |  |
| INVALID_CONTRACT_STATUS | int |  |
| WAITING_FOR_CONFIRMATION | int |  |
| CONTRACT_NOT_FOUND | int |  |
