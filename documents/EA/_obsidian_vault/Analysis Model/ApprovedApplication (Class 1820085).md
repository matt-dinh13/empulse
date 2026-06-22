---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820085
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ApprovedApplication

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

Data related to the already approved application.

## 🔗 Connections (5)

- → Dependency: [[ExtendedProperties (Class 1820111)]]
- → Dependency: [[Relationships (Class 1820108)]]
- → Dependency: [[ExtendedProperty (Class 1820075)]]
- → Dependency: [[ExtendedInformation (Class 1820068)]]
- ← Dependency: [[UpdateApprovedApplicationRequest (Class 1820012)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - UpdateApprovedApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| extendedInformation | ExtendedInformation |  |
| relationships | MessageAttribute |  |
| extendedProperties | ExtendedProperties |  |
