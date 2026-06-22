---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1285994
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#6 - New service type - substitution of RELIP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

1.Adjust filling of code list of Purposes for Financing Package and fill it by purposes:
ICT - initial card transaction
EPP - equal payment plan
AEPP - automatic equal payment plan
LOP - loan on phone
ALOP - advanced loan on phone

2. Create new type of service with following parameters:
Client can ask for installment plan on RELs only for defined purposes.
Code = IPPACK
Name = Installment Plan Pack
Service category = Loan options
Service scope = CONTRACT
Calculation Order = not defined
Max Assignments to Product = 1
Evaluate Before Finishing = null
Order in calculator: default = null (not displayed)
Calculator Preference: default = NO_PREFERENCE
Dedicated for Product Type = REL
Flags:
MANDATORY_WITH_PRODUCT

3. Define specific parameters of the IPPACK service as follows:
set of purposes from code lists, at least one is mandatory, each purpose can be assigned only once

4. Reflect new type of service in service management UI and ProvideServiceDataWS.

## 📊 Appears In (1 diagrams)

- Custom: PCG-701 Financing Schema II (CBL-1533)
