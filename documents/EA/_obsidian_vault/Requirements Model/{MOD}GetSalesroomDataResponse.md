---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-291 Merchant URL address in Salesroom Management (CBL-262)"
domain: "Requirements Model"
element_id: 1666730
diagrams: 3
connections: 52
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}GetSalesroomDataResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-291 Merchant URL address in Salesroom Management (CBL-262)

## 📝 Notes

This data type defines output of the ProvideSnmDataWS.

## 🔗 Connections (51)

- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency «use»: [[User Type]]
- → Dependency: [[{ADD}Sales District Type]]
- → Dependency «use»: [[Sales Region Type]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency «use»: [[Contact Type]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom Commodity Type]]
- → Dependency «use»: [[Business Area Type]]
- → Dependency: [[Fingerprint Reader Type]]
- → Dependency «use»: [[Cobrand Group Type]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom 2 Feature]]
- → Dependency «use»: [[Contact Person Type]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Realisation: [[REQ2_ Provide support for two new HSIS sales hierarchy levels]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency «use»: [[Salesman Type]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency «use»: [[Document Type Type]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency «use»: [[Sales Zone Type]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency «use»: [[Bank account type]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency «use»: [[Address Type]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency «use»: [[Available disbursement channel]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency: [[Salesroom (Class 1556394)]]
- → Dependency «use»: [[User Type]]
- ← Dependency «use»: [[ProvideSnmDataWS]]

## 📊 Appears In (3 diagrams)

- Custom: PCG-291 Merchant URL address in Salesroom Management (CBL-262)
- Logical: Consumed Web service ProvideSNMDataWS
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Commodity | string |  |
| Salesman | Salesman Type |  |
| Activation Date | Date |  |
| Address | Address Type |  |
| Bank account | Bank account type |  |
| Branch License Number | string |  |
| Business Area | Business Area Type |  |
| Business Model | Business Model Type |  |
| Category | string |  |
| Code | Number |  |
| Contact | Contact Type |  |
| Contact Person | Contact Person Type |  |
| Contract Sign Date | Date |  |
| Date of Checking | Date |  |
| District Sales Manager | User Type |  |
| Employee | User Type |  |
| End of Activity | Date |  |
| Feature | Feature Type |  |
| Group Salesroom Number | Number |  |
| Disbursement channels | Available disbursement channel |  |
| Name | string |  |
| Moment of Payment | Moment of Payment Type |  |
| Motivation Program Date | Date |  |
| Online Connection | Boolean |  |
| PAN Number | string |  |
| Payment Status | Payment Status Type |  |
| Shop Size | Number |  |
| Tax Identification Number | string |  |
| Status | Status Type |  |
| Contract Negotiation Process | Contract Negotiation Process Type |  |
| 2BoD filling | 2BoD filling Type |  |
| Web Cam | Boolean |  |
| Partner | number |  |
| Cobrand Group | Cobrand Group Type |  |
| Document Type | Document Type Type |  |
| Card pickup | boolean |  |
| requiredPhotoTypes | string |  |
| Manual Disbursement  | boolean |  |
| Sales Region | Sales Region Type |  |
| Sales Zone | Sales Zone Type |  |
| Send notifications | boolean |  |
| URL | string |  |
| merchantUrl | string |  |
| latitude | decimal |  |
| longtitude | decimal |  |
| parentSalesroomCode | string |  |
| note | string |  |
| fingerprintReader | Fingerprint Reader Type |  |
| {DEL}Paperless | boolean |  |
| salesDistrict | {ADD}Sales District Type |  |
| {DEL}OTP | boolean |  |
| {ADD}partnerSettlement | boolean |  |
| {ADD}salesroomexperimentalfeatures | SalesroomFeatureTypeCode |  |
