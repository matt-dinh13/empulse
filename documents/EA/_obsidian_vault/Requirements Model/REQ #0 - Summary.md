---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2620 (CLM-1155) New insurance types for REL products"
domain: "Requirements Model"
element_id: 1291606
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #0 - Summary

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2620 (CLM-1155) New insurance types for REL products

## 📝 Notes

Insurance Service:

	
- a new parameter which define whether insurance premium is to be calculated, or only notify about start/end of charging premium - novy parametr zatim zbytecny


Insurance processing:

	
- Send notification about start of premium charging (on contract signature, on the first debit transaction; based on Insurance Service parameter)
	
- Send notification about end of premium charging (cancel/termination of insurance; stop prolongation, switch off/switch on of the insurance; based on Insurance Service parameter)
	
- Receive notification about premium charging from AM (a new message; evaluation based on Insurance Service parameter? - bude se pouzivat nova message i stavajici EOM v Debt Catalogue)


	
- Automaticka prolongace -> nepouzivat pro First Period Duration/Next Period Duration = BILLING_PERIOD. Vysvetlit rozdil mezi Prolongation (period duration je casovy udaj) a zapinaní/vypinani pojisteni (jen pro First Period Duration/Next Period Duration = BILLING_PERIOD)


Open question:

	
- jak to bude se "switch off/switch on of the insurance" on demand? Tj, sjednam smlouvu (nebo taky ne), ale pojisteni bude cekat na povel k zapnuti. Insurance Contract muze byt ve stavu signed/active? 
- Notifikace o Start/stop insurance. Stavajici reseni Service switch off/switch on nelze pouzit kompletne. Duvody: Separace pojisteni z BSL; "service switch on" funguje jen pri podpisu, kdezto pojisteni pouziva ruzne triggers/events - notifikovat musime az kdyz pojisteni skutecne zacne (vytvoreni insurance period) - prepouzit jen LoanServiceRequest pro ucely notifikace o pojisteni
- Insurance Service.First Insurance Period Trigger = 'ON_DEMAND'  -> nebudeme delat

## 📊 Appears In (1 diagrams)

- Custom: CBL-2620 (CLM-1155) New insurance types for REL products.docx
