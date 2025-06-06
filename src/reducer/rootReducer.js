// rootReducer.js

import { combineReducers } from 'redux';
import dataReducer from './reducer';

const rootReducer = combineReducers({
  data: dataReducer,
  productlist: dataReducer,
  storelist: dataReducer,
  Editcategory: dataReducer,
  loginData: dataReducer,
  getproductlist: dataReducer,
  getUserDatalist: dataReducer,
  getOrder: dataReducer,
  GetProductId: dataReducer,
  GetAddcardRes: dataReducer,
  GetAddcardUserRes: dataReducer,
  DeleteAddcardUserRes: dataReducer,
  GetBrandId: dataReducer,
  createData: dataReducer,
  GetStorelist: dataReducer,
  EditproductbyId: dataReducer,
  DeleteProductId: dataReducer,
  GetStaffList: dataReducer,
  addStaffList: dataReducer,
  GetProfileList: dataReducer,
  GetCoupunList: dataReducer,
  GetEventList: dataReducer,
  GetBlogsList: dataReducer,
  AddCouponList: dataReducer,
  AddEventsList: dataReducer,
  AddBlogsList: dataReducer,
  subbrandres: dataReducer,
  TrackEventres: dataReducer,
  Micrositeres: dataReducer,
  EditMicrositeres: dataReducer,
  DeleteMicrositeres: dataReducer,
  Micrositedetailres: dataReducer,
  EditMicrositedetailres: dataReducer,
  DeleteMicrositedetailres: dataReducer,
  Floorplanres: dataReducer,
  EditFloorPlanres: dataReducer,
  DeleteFloorPlanres: dataReducer,
  Amenitiesres: dataReducer,
  EditAmenitiesres: dataReducer,
  DeleteAmenitiesres: dataReducer,
  Specificationsres: dataReducer,
  EditSpecificationsres: dataReducer,
  DeleteSpecificationsres: dataReducer,
  SpecificationsDetailres: dataReducer,
  EditSpecificationsDetailres: dataReducer,
  DeleteSpecificationsDetailres: dataReducer,
  BankApprovalres: dataReducer,
  EditBankApprovalres: dataReducer,
  DeleteBankApprovalres: dataReducer,
  LegalApprovalres: dataReducer,
  EditLegalApprovalres: dataReducer,
  DeleteLegalApprovalres: dataReducer,
  Builderres: dataReducer,
  EditBuilderres: dataReducer,
  DeleteBuilderres: dataReducer,
  PropTyperes: dataReducer,
  EditPropTyperes: dataReducer,
  DeletePropTyperes: dataReducer,
  PropStatusres: dataReducer,
  EditPropStatusres: dataReducer,
  DeletePropStatusres: dataReducer,
  MicrositeMetaTagres: dataReducer,
  EditMicrositeMetaTagres: dataReducer,
  DeleteMicrositeMetaTagres: dataReducer,
  MicrositePriceres: dataReducer,
  EditMicrositePriceres: dataReducer,
  DeleteMicrositePriceres: dataReducer,

});

export default rootReducer;
