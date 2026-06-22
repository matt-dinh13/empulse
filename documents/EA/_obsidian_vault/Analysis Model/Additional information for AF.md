---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822796
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Additional information for AF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

Additional information:

	
- During application filling, user can exit filling-in and finish the application form later. In such a case, this use case ends immediately.


	
- During application filling, user can save the currently-filled-in data (using the function in GUI) and finish the application form later. The data are saved to the temporary structures (only Field level validation - see below - are performed). When saved, Temporary_application.Saved is set to 'true'. If the application was canceled before the saving, system informs the user about the possibility not-to-work with the application.
Note: Before saving the data, system checks that the current user is still assigned to given contract for 2BoD (Algorithm: Find user assigned to contract in 2BoD queue = current user). If not, system informs the user that the contract was reassigned and cannot be saved and use case ends.
	
- If a user quits application form unexpectedly (by clicking in the menu or closing the window), he/she will stay assigned to the contract. (2BoD)

## 🔗 Connections (1)

- ← Dependency: [[Product AF]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
