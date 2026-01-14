import { currentUser } from "@clerk/nextjs/server";
import {db} from "../../../components/config/db"
import { usersTable } from "@/components/config/schema";
import { NextRequest, NextResponse } from "next/server";
import {eq} from "drizzle-orm"
export async function POST(req:NextRequest){
  const user = await currentUser();

  //check if user exist
  try {
    const users = await db
      .select()
      .from(usersTable)
      //@ts-ignore
      .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

    let userToReturn;

    if (users?.length === 0) {
      const result = await db
        .insert(usersTable)
        .values({
          //@ts-ignore
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        })
        .returning();
      userToReturn = result[0];
    } else {
      userToReturn = users[0];
    }

    return NextResponse.json(userToReturn);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}