---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5122 - Add Insurances and Services to Existing Contract in POS Loan and Cash Loan"
domain: "Requirements Model"
element_id: 1880808
diagrams: 10
connections: 26
tags:
  - class
  - requirements-model
---

# 🔷 Service Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5122 - Add Insurances and Services to Existing Contract in POS Loan and Cash Loan

## 📝 Notes

Service type groups together services which provide the same service/option/feature only with different settings, conditions or price.

## 🔗 Connections (26)

- ← Dependency: [[Offer Request Service Type Preference]]
- ← Dependency: [[Service type]]
- ← Dependency: [[Product Offer Request Service Preference]]
- ← Dependency: [[{MOD}LAP Offer vector]]
- ← Dependency: [[{MOD}LAP Offer vector]]
- ← Dependency: [[{DEL}ServiceType (Class 1775267)]]
- ← Dependency: [[Service type (GUIElement 1803025)]]
- ← Dependency: [[Insurance Contract (Class 1852795)]]
- ← Dependency: [[Service type (GUIElement 1867451)]]
- ← Dependency: [[Service type (GUIElement 1867397)]]
- ← Dependency: [[Service Type Parameter Definition]]
- ← Aggregation: [[ServiceParameterValue]]
- → Dependency: [[ServiceOfferDto]]
- → Dependency: [[Service Scope]]
- → Dependency: [[{MOD}Service Type Definition]]
- ← Aggregation: [[Service Type Parameters]]
- ← Aggregation: [[Service Parameter (Boundary 1880847)]]
- → Dependency: [[Service Category]]
- ← Dependency: [[Product To Service Type]]
- ← Usage: [[Service Type Supplement]]
- → Dependency: [[ServiceOfferDto]]
- ← Aggregation: [[Service Evaluation Event Definition]]
- → Dependency: [[Product Type (Enumeration 1879104)]]
- ← Aggregation: [[Service Type Flag]]
- ← Dependency: [[Service (Class 1880804)]]
- → Dependency: [[Service Type Preference]]

## 📊 Appears In (10 diagrams)

- Custom: PCG-5122 - Add Insurances and Services to Existing Contract in POS Loan and Cash Loan
- Logical: GetSalesPackageCodeLists
- Logical: Insurance Contract
- Logical: LAP Offer vector - attributes for Optional offer Generation
- Logical: Loan Service Structure
- Logical: Loan Service Type definition
- Logical: Product Management
- Logical: Product Offers generated for External system
- Logical: Service Processing Setting
- Logical: Supplement definition for Collection tool service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Text |  |
| Name | Text |  |
| Category | Service Category |  |
| Active | Boolean |  |
| Calculation Order | int |  |
| Max Assignments to Product | int |  |
| Scope | Service Scope |  |
| Evaluate Before Finishing  | int |  |
| Order in Calculator | int |  |
| Calculator Preference | Service Type Preference |  |
| Dedicated for Product Type | Product Type |  |
| Max on Offer | int |  |
