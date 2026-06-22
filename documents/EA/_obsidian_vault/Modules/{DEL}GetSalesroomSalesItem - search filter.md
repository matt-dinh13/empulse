---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775641
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetSalesroomSalesItem - search filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
//This algorithm finds Sales Packages Assignments according to defined set of criteria

Input:
- Request.GetSalesroomSalesItemCriterion

Output:
- Set of SalesItemsAssignedToSalesrooms (SSI) in structure corresponding to SalesroomSalesItemValues.

SSI is retrieved from join of 
- Salesroom To Sales Package 
- Sales Package 
- Sales Package Item
where 
- SalesPackageToSalesPackage.SalesPackage = SalesPackage.Code
- SalesPackageItem is composite part of SalesPackage
- assignment is valid, i.e. SSI.ValidFrom <= SSI.ValidTo or SSI.ValidTo is empty (for definition of SSI.ValidFrom/To see below)

Structure SSI is filled as follows:

	
- SSI.salesroomCode = SalesroomToSalesPackage.Salesroom
	
- SSI.itemType = SalesPackageItem.Type
	
- SSI.itemCode = SalesPackageItem.Code
	
- SSI.ValidFrom = maximum(SalesPackageToSalesPackage.ValidFrom, SalesPackageItem.ValidFrom)
	
- SSI.ValidTo = minimum(SalesPackageToSalesPackage.ValidTo, SalesPackageItem.ValidTo)
	
- - If one value of ValidTo is not defined then the SSI.ValidTo = the other value of ValidTo
	
- - If both values ValidTo are not defined then SSI.ValidTo is not defined


System transforms set of Request.GetSalesroomSalesItemCriterion (Criterion) to searching rules as follows:

	
- Criterion.type = SALESROOM (more such criteria can be defined)
If exists such criterion then system finds SSI where SalesPackageToSalesPackage.Salesroom = Criterion.value for at least one criterion where Criterion.type = SALESROOM


	
- Criterion.type = ITEMTYPE (more such criteria can be defined)
If exists such criterion then system finds SSI where SalesPackageItem.Type = Criterion.value for at least one criterion where Criterion.type = ITEMTYPE


	
- Criterion.type = PRODUCT (more such criteria can be defined)
If exists such criterion then system finds SSI where SalesPackageItem.Type = PRODUCT and SalesPackageItem.Code = Criterion.value for at least one criterion where Criterion.type = PRODUCT
	
- Criterion.type = SERVICE (more such criteria can be defined)
If exists such criterion then system finds SSI where SalesPackageItem.Type = SERVICE and SalesPackageItem.Code = Criterion.value for at least one criterion where Criterion.type = SERVICE


	
- Criterion.type = VALID_ON_DATE (such criterion can be defined only once)
If exists such criterion then system finds SSI where
- SSI.ValidFrom <= Criterion.value 
AND
- (SSI.ValidTo >= Criterion.value OR SSI.ValidTo is not defined)

System finds and returns SSI which satisfy all the searching rules (archived record are ignored).

## 🔗 Connections (1)

- ← Dependency: [[{DEL}09.308 Get Salesroom Sales Item]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Sales Package Assignment UC
