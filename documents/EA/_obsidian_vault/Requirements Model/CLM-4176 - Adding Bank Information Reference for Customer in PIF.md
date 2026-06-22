---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13715 (CLM-4176) Adding Bank Information Reference for Customer in PIF"
domain: "Requirements Model"
element_id: 1689154
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4176 - Adding Bank Information Reference for Customer in PIF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13715 (CLM-4176) Adding Bank Information Reference for Customer in PIF

## 📝 Notes

Start to send to PIF valid disbursement channel exchange id on client update during contract sign/contract registration.

There should be switch for two possible data sources for exchange id:

BSL_PAYMENT_CHANNEL[where .PURPOSE = 'DI'].DATA_EXCHANGE_ID - For reference check LOR method 
loadAndValidateContractPaymentChannels in ApplicationSignatureServiceFacade.
Get all contract payment channels from BSL_CONTRACT2PAYM_CHANNEL, then call Payment REST API to identify which has purpose = DI.

## 📊 Appears In (1 diagrams)

- Custom: CBL-13715 (CLM-4176) Adding Bank Information Reference for Customer in PIF
