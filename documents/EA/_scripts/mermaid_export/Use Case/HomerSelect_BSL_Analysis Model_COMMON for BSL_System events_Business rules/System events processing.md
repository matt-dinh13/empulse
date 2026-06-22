# System events processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Business rules
- **Diagram ID**: 163442
- **Elements**: 20
- **Connectors**: 15

```mermaid
graph LR
    External_Reference["External Reference"]
    Logical_data_model_CommoditySystemEvent_schema["Logical data model : CommoditySystemEvent schema"]
    DEL_CommoditySystemEvent["{DEL}CommoditySystemEvent"]
    Logical_data_model_Application_system_event_schema["Logical data model : Application system event schema"]
    ApplicationSystemEvent["ApplicationSystemEvent"]
    Logical_data_model_CEL_Account_system_event_schema["Logical data model :CEL Account system event schema"]
    CELAccountSE["CELAccountSE"]
    Logical_data_model_SNMSystemEvent["Logical data model : SNMSystemEvent"]
    Logical_data_model_InstallmentScheduleSystemEvent_schema["Logical data model :InstallmentScheduleSystemEvent schema"]
    Logical_data_model_DDSSystemEvent_schema["Logical data model :DDSSystemEvent schema"]
    Logical_data_model_OutgoingPaymentSystemEvent["Logical data model : OutgoingPaymentSystemEvent"]
    Logical_data_model_IncomingPaymentSystemEvent["Logical data model : IncomingPaymentSystemEvent"]
    Logical_data_model_ContractSystemEvent_schema["Logical data model :ContractSystemEvent schema"]
    SNMSystemEvent["SNMSystemEvent"]
    InstallmentScheduleSystemEvent["InstallmentScheduleSystemEvent"]
    DDSSystemEvent["DDSSystemEvent"]
    OutgoingPaymentSystemEvent["OutgoingPaymentSystemEvent"]
    IncomingPaymentSystemEvent["IncomingPaymentSystemEvent"]
    Business_rules_System_events_processing_setting["Business rules : System events processing setting"]
    MOD_System_event_processing["{MOD}System event processing"]
    ApplicationSystemEvent -->|unnamed| Logical_data_model_Application_system_event_schema
    Logical_data_model_CEL_Account_system_event_schema -->|unnamed| CELAccountSE
    DDSSystemEvent -->|unnamed| Logical_data_model_DDSSystemEvent_schema
    IncomingPaymentSystemEvent -->|unnamed| Logical_data_model_IncomingPaymentSystemEvent
    Logical_data_model_CommoditySystemEvent_schema -->|unnamed| DEL_CommoditySystemEvent
    InstallmentScheduleSystemEvent -->|unnamed| MOD_System_event_processing
    DDSSystemEvent -->|unnamed| MOD_System_event_processing
    SNMSystemEvent -->|unnamed| MOD_System_event_processing
    IncomingPaymentSystemEvent -->|unnamed| MOD_System_event_processing
    ApplicationSystemEvent -->|unnamed| MOD_System_event_processing
    DEL_CommoditySystemEvent -->|unnamed| MOD_System_event_processing
    MOD_System_event_processing -->|unnamed| Business_rules_System_events_processing_setting
    CELAccountSE -->|unnamed| MOD_System_event_processing
    OutgoingPaymentSystemEvent -->|unnamed| MOD_System_event_processing
    OutgoingPaymentSystemEvent -->|unnamed| Logical_data_model_OutgoingPaymentSystemEvent
```
