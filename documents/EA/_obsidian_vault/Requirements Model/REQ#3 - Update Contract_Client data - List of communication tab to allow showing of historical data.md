---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5351 (CLM-1840) Archiving BSL Communication records"
domain: "Requirements Model"
element_id: 1457692
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3 - Update Contract/Client data - List of communication tab to allow showing of historical data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5351 (CLM-1840) Archiving BSL Communication records

## 📝 Notes

New filter value "Historical data" should be added
Then DateFrom - DateTill date picker should be shown and used as date interval for BSL data as well as for interval for CommHistoryWS.

Limitations:
1/ DateTill < current date - COMM_HISTORY_LENGTH (in months) 
- user has to use "All recent" option for this data, it is needed to avoid union data from active and archived tables
2/ DateTill-DateFrom <=12 months  
- max 1 year period can be used

## 📊 Appears In (1 diagrams)

- Custom: CBL-5351 (CLM-1840) Archiving BSL Communication records
