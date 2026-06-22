---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819797
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ApprovedApplication

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 📝 Notes

Data related to the already approved application.

## 🔗 Connections (5)

- → Dependency: [[ExtendedProperties (Class 1819810)]]
- → Dependency: [[ExtendedInformation (Class 1819801)]]
- → Dependency: [[Document (Class 1819793)]]
- → Dependency: [[Relationships (Class 1819782)]]
- ← Dependency: [[UpdateApprovedApplicationRequest (Class 1819708)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v22 - UpdateApprovedApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| extendedInformation | ExtendedInformation |  |
| relationships | MessageAttribute |  |
| extendedProperties | ExtendedProperties |  |
| documents | Document |  |
