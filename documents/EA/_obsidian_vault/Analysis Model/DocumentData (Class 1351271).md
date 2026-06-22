---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_PACKAGE"
domain: "Analysis Model"
element_id: 1351271
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 DocumentData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_PACKAGE

## 🔗 Connections (4)

- → Dependency «use»: [[AddressType (Class 1878263)]]
- → Dependency: [[Generate barcode]]
- ← Generalization: [[contractPackage]]
- → Dependency «use»: [[PackageItemType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_PACKAGE

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| barCode | string |  |
| posCode | string |  |
| name | string |  |
| packageType | string |  |
| packageIdNumber | string |  |
| dateOfPackageGeneration | dateTime |  |
| printDate | dateTime |  |
| salesAgentName | string |  |
| address | AddressType |  |
| contractPackageItems | PackageItemType |  |
| posBusinessModel | string |  |
| posMomentOfPayment | string |  |
