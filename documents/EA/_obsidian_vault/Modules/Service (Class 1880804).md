---
type: Class
stereotype: "versioned"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}COMMON for Sales Package"
domain: "Modules"
element_id: 1880804
diagrams: 45
connections: 30
tags:
  - class
  - modules
---

# 🔷 Service

> **Type**: Class · **Stereotype**: «versioned»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}COMMON for Sales Package

## 📝 Notes

This class is intended for the definition of services. It is a common ancestor for services

## 🔗 Connections (28)

- ← Dependency: [[Services-Available]]
- ← Dependency: [[FER Service (GUIElement 1275185)]]
- ← Dependency: [[Sales Package Item]]
- ← Dependency «mapping»: [[ServiceCommonDataDto]]
- ← Dependency: [[Product Offer Request Service Choice]]
- ← Dependency: [[{DEL}Service]]
- ← Dependency: [[{DEL}SalesroomSalesItemValues]]
- ← Dependency: [[{DEL}SalesPackageItem]]
- ← Dependency: [[{ADD} Service to Product Profile Relation]]
- ← Association: [[Contract Service (Class 1868570)]]
- ← Generalization: [[{MOD}Partial Early Repayment Service]]
- → NoteLink: [[Logical Data Model _ Loan Service Setting]]
- ← Association: [[Offer Service (Class 1878189)]]
- ← Dependency: [[Product To Service]]
- → Dependency: [[{MOD}Tariff]]
- → Dependency: [[{MOD}Terms And Conditions]]
- ← Aggregation: [[{MOD}Subvention (Class 1858806)]]
- → Dependency: [[Loan Origination Process]]
- → Generalization: [[Versioned entity]]
- → Dependency: [[Currency (Class 1819822)]]
- → Dependency: [[Service Type (Class 1880808)]]
- → Association: [[{MOD}Partner]]
- ← Aggregation: [[Service To Document Type]]
- ← Aggregation: [[Payment service]]
- ← Dependency: [[Service Relation (Class 1880802)]]
- ← Dependency: [[Service Relation (Class 1880802)]]
- ← Aggregation: [[Service To Eligibility Container]]
- ← Aggregation: [[Service to qualification criteria]]

## 📊 Appears In (45 diagrams)

- Logical: {DEL}SalesPackageValues
- Logical: CBL-1533 Adjust OFP
- Logical: CEL Rewards - Setting
- Logical: Change of Due Date
- Logical: Checking Terms of Loan setting
- Logical: Consolidation - Setting
- Logical: Contract - Financial parameters
- Logical: Contract - Services
- Logical: Contract Service
- Logical: COS - LDM changes
- Logical: COS - LDM changes
- Logical: CSI-1881 Update of the Contract Service domain
- Logical: Deferred Payment
- Logical: Entities to be removed
- Logical: Fees-back
- Logical: Full Early Repayment Setting
- Logical: GetSalesPackageCodeLists
- Logical: GetSalesroomSalesItems
- Logical: Gift Payment
- Logical: Grace Period - Setting
- Logical: Grace period for REL
- Logical: IBACK
- Logical: Installment Plan Pack - Setting
- Logical: Insurance Service
- Logical: Loan consolidation - Logical Data Model
- Logical: Loan Restructuring - Setting
- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain
- Logical: Loan Service Structure
- Logical: Logical Data Model
- Logical: Loyalty Service
- Logical: Offer Financial Parameters
- Logical: Offer Service
- Logical: Partial early repayment setting
- Logical: Payment Holidays - Settting
- Logical: Payment service - Settings
- Logical: Product Management
- Logical: Product Offers generated for External system
- Logical: REL Payment Holidays - Setting
- Logical: Sales Package
- Logical: Service data synchronization mapping
- Logical: SMS Notification
- Logical: Standard Payment Card
- Logical: Subventions
- Logical: Zero promo for REL

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Text |  |
| Type | Service Type |  |
| Name | Text |  |
| Currency | Currency |  |
| Description | Text |  |
| Valid From | Date |  |
| Valid To | Date |  |
| Manual Termination Allowed | Boolean | false |
| Tariff | Tariff |  |
| Minimal Days Of Service Usage | int |  |
| Terms and Conditions | {MOD}Terms And Conditions |  |
| Loan Origination Process | string |  |
| Approval Document | string |  |
| Mandatory on contract | Boolean | false |
| Manual | Boolean | true |
| Limit Minimal Installments | int |  |
| Limit Maximal Installments | int |  |
| Limit Minimal Credit Amount | int |  |
| Limit Maximal Credit Amount | int |  |
| {MOD}For Additional Offer | boolean | false |
| Additional Offer Expiration | int |  |
| Limit cancellation to cooling off period | boolean | false |
| Limit termination out of cooling off period | boolean | false |
| {ADD}Updated by employee number | string |  |
