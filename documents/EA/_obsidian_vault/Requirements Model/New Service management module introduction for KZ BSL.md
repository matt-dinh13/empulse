---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)"
domain: "Requirements Model"
element_id: 1820507
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 New Service management module introduction for KZ BSL

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)

## 📝 Notes

Due to introduction the product Account Management module (AM) to the KZ, it is needed to change the current integration logic between KZ BSL and AM regarding the REL Service management. For this reason, there is proposed creation a new Service management module and VAS Deal module (Insurance service extension).
Goal of this solution is replacement of the current BSL Contract Service functions by a separate component which will be able of full support of AM functions regarding REL service management.

Rules for integration of the Services to Account Management (AM)

	
- Services (except Insurance Service) created within a REL contract origination (contract signature event) will be always activated (set as SWITCHED-ON) regardless the Service Type setting flag (SWITCH_ALLOWED)
	
- Insurance Service is activated (SWITCHED-ON) on defined event when Insurance Period start (i.e. Contract sign, Contract activated, First transaction,...)


Limitations for the REL Insurance Service support in the new Service management module

	
- Old insurance types - means all insurance service types where the premium is calculated on BSL side, and with setting where
- First Insurance Period Trigger in (CONTRACT_SIGNING_ DATE_AND_OFFSET or CONTRACT_ACTIVATION_DATE_AND_OFFSET or FIRST_TRANSACTION_SIGN_DATE_AND_OFFSET) and First Insurance Period Duration in (CALENDAR_MONTH, CALENDAR_YEAR, NUMBER_OF_DAYS)
- First Insurance Period Trigger = FIRST_EOM_BILLING_DATE and First Insurance Period Duration = BILLING_PERIOD
	
- New insurance types - means all insurance service types  where the premium is calculated on AM side, and with setting where
First Insurance Period Trigger in (CONTRACT_SIGNING_ DATE_AND_OFFSET or CONTRACT_ACTIVATION_DATE_AND_OFFSET or FIRST_TRANSACTION_SIGN_DATE_AND_OFFSET) and First Insurance Period Duration = BILLING_PERIOD
	
- The new Contract Service module will supports adding New Insurance types only
	
- The new Contract Service module will supports prolongation of all Insurance types
	
- The new Contract Service module will supports replacement (flip) of New Insurance types only
	
- The new Contract Service module will supports cancellation and termination of all Insurance types

## 📊 Appears In (1 diagrams)

- Custom: CBL-22680 Service Management Modules for REL (KZ)
