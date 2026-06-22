---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1775321
diagrams: 4
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {DEL}09.308 Get Salesroom Sales Item

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights

## 📝 Notes

{DEL PCG-4293/}
Returns list of assignments of Products and Services to Salesrooms on particular date+time.
If GlobalParameter.UseSalesPackage = True then assignments are retrieved from structures related to Sales Package.
Otherwise assignments  (Products only) are retrieved from structure Salesroom Product.

## 🔗 Connections (7)

- ← UseCase «include»: [[{MOD}09.281 Show assignments on salesroom]]
- ← Realisation: [[{DEL}SalesPackageWS]]
- → Dependency: [[{DEL}GetSalesroomSalesItemRequest - validation rules]]
- → Dependency: [[{DEL}GetSalesroomSalesItem - search filter]]
- → Realisation: [[{DEL}09.308 Get Salesroom Sales Item (Requirement 1775649)]]
- → Dependency: [[{DEL}GetSalesroomSalesItem - SNM search filter]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: GetSalesroomSalesItems
- Use Case: {DEL}Sales Package Assignment UC
- Use Case: Salesroom Assignment UC
