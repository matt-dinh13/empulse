---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3070 (CLM-1787) Automatic evaluation of CheckTL service"
domain: "Requirements Model"
element_id: 1415248
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Automatic evaluation of the CheckTL request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3070 (CLM-1787) Automatic evaluation of CheckTL service

## 📝 Notes

Goal of this task is implementing a function for automatic evaluation of the CheckTL service. The service will be automatically evaluated in case:

	
- CheckTL service is set for automatic evaluation
	
- INVOICE document file is uploaded in the system

If INVOICE document file is uploaded, a notification is generated and subsequently processed by the new function for CheckTL automatic evaluation.

Modification of UC 08.409 Evaluate Checking Terms of Loan Service (automatic job):
- it is needed to get CheckTL service parameters (definition) to store them on CheckTL request creation (Checked Document Type, Automatic Fulfillment)
- add automatic execution of the CheckTL request if defined Document file is uploaded

Reuse some functions of UC 08.408 Set terms of loan fulfillment for automatic execution of the CheckTL request - creation of the new common function for CheckTL fulfillment evaluation.

## 📊 Appears In (1 diagrams)

- Custom: CBL-3070 (CLM-1787) Automatic evaluation of CheckTL service
