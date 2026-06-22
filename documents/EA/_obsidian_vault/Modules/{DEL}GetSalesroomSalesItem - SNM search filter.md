---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775642
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetSalesroomSalesItem - SNM search filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
//This algorithm finds Products assigned to Salesroom according to defined set of criteria
//Assignment of Services to Salesrooms is not supported

Input:
- Request.GetSalesroomSalesItemCriterion

Output:
- Set of SalesItemsAssignedToSalesrooms (SSI) in structure corresponding to SalesroomSalesItemValues.

SSI is retrieved from join of 
- Salesroom
- Salesroom Product
where 
- SalesroomProduct is composite part of Salesroom

Structure SSI is filled as follows:

	
- SSI.salesroomCode = Salesroom.Code
	
- SSI.itemType = PRODUCT
	
- SSI.itemCode = SalesroomProduct.ProductCode
	
- SSI.ValidFrom = SalesroomProduct.ValidFrom
	
- SSI.ValidFrom = SalesroomProduct.ValidTo


System transforms set of Request.GetSalesroomSalesItemCriterion (Criterion) to searching rules as follows:

	
- Criterion.type = SALESROOM (more such criteria can be defined)
If exists such criterion then system finds SSI where Salesroom.Code = Criterion.value for at least one criterion where Criterion.type = SALESROOM


	
- Criterion.type = ITEMTYPE (more such criteria can be defined)
If exists such criterion then Criterion.value = PRODUCT for at least one criterion where Criterion.type = ITEMTYPE otherwise no SSI is returned


	
- Criterion.type = PRODUCT (more such criteria can be defined)
If exists such criterion then system finds SSI where SalesroomProduct.ProductCode = Criterion.value for at least one criterion where Criterion.type = PRODUCT
	
- Criterion.type = SERVICE (more such criteria can be defined)
This criterion is ignored.


	
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
