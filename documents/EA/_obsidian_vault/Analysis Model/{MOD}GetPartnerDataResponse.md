---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization"
domain: "Analysis Model"
element_id: 1595428
diagrams: 2
connections: 27
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}GetPartnerDataResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization

## 📝 Notes

This data type defines output of the ProvideSnmDataWS.

## 🔗 Connections (26)

- → Dependency: [[{MOD}Partner]]
- → Dependency «use»: [[Address Type]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency «use»: [[Business Area Type]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency «use»: [[Bank account type]]
- → Dependency «use»: [[Available disbursement channel]]
- → Dependency «use»: [[Cobrand Group Type]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency «use»: [[Contact Type]]
- → Dependency «use»: [[User Type]]
- → Dependency «use»: [[Contact Person Type]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[{MOD}Partner]]
- ← Dependency «use»: [[ProvideSnmDataWS]]

## 📊 Appears In (2 diagrams)

- Logical: Consumed Web service ProvideSNMDataWS
- Logical: SNM Partner Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| LegalForm | string |  |
| Activation Date | Date |  |
| Address | Address Type |  |
| Bank account | Bank account type |  |
| Business Area | Business Area Type |  |
| Category | string |  |
| Cobrand groups | Cobrand Group Type |  |
| Code | Number |  |
| Contact | Contact Type |  |
| Contact Person | Contact Person Type |  |
| Contract Sign Date | Date |  |
| Disbursement channels | Available disbursement channel |  |
| District Sales Manager | User Type |  |
| End of activity | Date |  |
| Group Partner Number | Number |  |
| License Number | string |  |
| Name | Text |  |
| PAN Number | string |  |
| Payment Status | Payment Status Type |  |
| Security Check | Boolean |  |
| Status | Status Type |  |
| Tax Identification Number | string |  |
| Type | Partner Type |  |
| partnerSettlement | boolean |  |
| {ADD}Main Partner | string |  |
