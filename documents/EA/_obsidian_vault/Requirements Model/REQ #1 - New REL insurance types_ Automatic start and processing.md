---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2620 (CLM-1155) New insurance types for REL products"
domain: "Requirements Model"
element_id: 1291605
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - New REL insurance types: Automatic start and processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2620 (CLM-1155) New insurance types for REL products

## 📝 Notes

Goal of this requirement is introducing new types of insurance for REL loans where the insurance premium charging will be ensured by the Account Management (AM).
Main characteristic of the insurance start and running:

	
- Automatic start of the insurance based on standard contract events (Contract signature, Contract activation), or Account event (First debit transaction). Start of insurance notification (Switch_on) is sent to AM (For the "start/stop insurance" notification, reuse LoanServiceRequest).


	
- Length of insurance period driven by EOM billing (notification about EOM billing done sent by AM)


	
- Insurance premium as well as Sum insured is calculated in AM module. Regarding Contract signature, it is needed to modify Create insurance contracts for insurance services (called from UC 01.186 Prepare documentation) so that Sum insured and Premium won't be calculated for Next Period Duration = BILLING_PERIOD
	
- Automatic termination of the insurance if conditions for the insurance prolongation are broken. End of insurance notification (Switch_off) is sent to AM.

## 🔗 Connections (1)

- ← Dependency: [[Create insurance contracts for insurance services]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-2620 (CLM-1155) New insurance types for REL products.docx
