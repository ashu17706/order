/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerUpdateInput } from "./CustomerUpdateInput";

@ArgsType()
class UpdateCustomerArgs {
  @Field(() => CustomerWhereUniqueInput, { nullable: false })
  where!: CustomerWhereUniqueInput;
  @Field(() => CustomerUpdateInput, { nullable: false })
  data!: CustomerUpdateInput;
}

export { UpdateCustomerArgs as UpdateCustomerArgs };
