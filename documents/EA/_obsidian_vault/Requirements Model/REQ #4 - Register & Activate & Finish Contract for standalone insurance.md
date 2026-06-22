---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone"
domain: "Requirements Model"
element_id: 1314967
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #4 - Register & Activate & Finish Contract for standalone insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3666 (CLM-1478) Extended Warranty Standalone

## 📝 Notes

It is supposed, the SAI contract will be registered, i.e. it should contain some documents to registration.
If the registration is successful, and SAI contract has Contract.Conditions Accepted = 'Accepted' (A) and Contract.Status = 'Signed' (N), it is activated (no change against the current process of the CEL/REL contracts)
If Contract.Conditions Accepted = 'Not Accepted' (N), the SAI contract can be activated by UC 01.274 Activate disbursed contracts (automatic job) after the client repays installment (i.e. Contract.Conditions Accepted = 'Accepted' (A))
A new UC 01.713 Finish registered contract on service execution is extension of the UC 01.712 Finish contract on service execution for case the contract registration is needed to be done before the contract finishing.

Modification of UC01.273 Register contract common:

	
- removing usage of GenerateOutPaymentYN system property


Modification of UC 01.274 Activate disbursed contracts (automatic job):

	
- adding function for finishing SAI contract which fulfilled defined conditions (i.e. Contract.Status = 'Active' (A), Contract.Conditions Accepted = 'Accepted' (A))


A new UC 01.713 Finish registered contract on service execution - new functionality

## 📊 Appears In (1 diagrams)

- Custom: CBL-3666 (CLM-1478) Extended Warranty Standalone
