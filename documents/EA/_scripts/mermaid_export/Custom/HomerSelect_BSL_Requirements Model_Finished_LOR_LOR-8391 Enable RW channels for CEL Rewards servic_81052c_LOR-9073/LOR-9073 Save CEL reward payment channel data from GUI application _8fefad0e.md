# LOR-9073 Save CEL reward payment channel data from GUI application form via PAYM API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8391 Enable RW channels for CEL Rewards service type in C2/LOR-9073 Save CEL reward payment channel data from GUI application form via PAYM API
- **Diagram ID**: 149311
- **Elements**: 9
- **Connectors**: 2

```mermaid
graph TD
    Application_Processing["Application Processing"]
    n_01_080_Fill_in_application["01.080 Fill in application"]
    Payment_information_product_AF["Payment information - product AF"]
    Payment_information_VN["Payment information VN"]
    Payment_information_PH["Payment information PH"]
    Payment_information_IN["Payment information IN"]
    Payment_information_ID["Payment information ID"]
    LOR_9073_Save_CEL_reward_payment_channel_data_from_GUI_appli["LOR-9073 Save CEL reward payment channel data from GUI application form via PAYM API"]
    LOR_8391_Enable_RW_channels_for_CEL_Rewards_service_type_in_["LOR-8391 Enable RW channels for CEL Rewards service type in C2"]
    LOR_9073_Save_CEL_reward_payment_channel_data_from_GUI_appli -->|unnamed| LOR_8391_Enable_RW_channels_for_CEL_Rewards_service_type_in_
    n_01_080_Fill_in_application -->|unnamed| Application_Processing
```
