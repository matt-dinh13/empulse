---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1855 (CLM-956) Full early repayment services changes"
domain: "Requirements Model"
element_id: 1826159
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Changes in FER request creation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1855 (CLM-956) Full early repayment services changes

## 📝 Notes

Following changes will be applied before and within FER request creation:

	
- COP service exists and COP period is still active, do not allow FER request creation (A4 #3.1)
	
- Checking FER moratorium length which depends on number of installments (A4 #3.1)
	
- If FER service definition allow this possibility, FER request can be created during moratorium, but different calculation of FER amount will be applied (A4 #3.2)
	
- Enabling GIFTP service application within FER request creation. It means, calculation of remaining debt will consider also active GIFTP service if FER service definition allow this possibility. (A4 #3.3)


Supposed new attributes for FER setting (done by PCG):

	
- Perform ER in Moratorium
	
- Include Gift Payment


	
- MoratoriumLength - moratorium based on contract term


Recalculation Reason setting (done by IS):

	
- add EM (FER in moratorium), EG (FER with GIFTP) for Installment Included In Operation entity setting due to dividing FER calculations by particular usage.

## 📊 Appears In (1 diagrams)

- Custom: CBL-1855 (CLM-956) Full early repayment services changes
