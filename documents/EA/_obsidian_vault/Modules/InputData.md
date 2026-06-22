---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Provided/Rabbit/csi.bsa.processing-result"
domain: "Modules"
element_id: 1861257
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 InputData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Interface Provided/Rabbit/csi.bsa.processing-result

## 📝 Notes

A message generated for bulk operation after creation or any change of status

## 🔗 Connections (1)

- ← Dependency: [[OperationProcessingResult]]

## 📊 Appears In (1 diagrams)

- Logical: csi.bsa.processing-result

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| replaceAlsoLowerVersions | bool |  |
| oldAssignedService | service |  |
| newAssignedService | service |  |
| periodEnd | datetime |  |
| systemCode | string |  |
| periodStart | datetime |  |
