
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model WorkoutPlan
 * 
 */
export type WorkoutPlan = $Result.DefaultSelection<Prisma.$WorkoutPlanPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model WorkoutExercise
 * 
 */
export type WorkoutExercise = $Result.DefaultSelection<Prisma.$WorkoutExercisePayload>
/**
 * Model BodyRecord
 * 
 */
export type BodyRecord = $Result.DefaultSelection<Prisma.$BodyRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  PERSONAL: 'PERSONAL',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StudentStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  OVERDUE: 'OVERDUE'
};

export type StudentStatus = (typeof StudentStatus)[keyof typeof StudentStatus]


export const PaymentStatus: {
  PAID: 'PAID',
  PENDING: 'PENDING',
  OVERDUE: 'OVERDUE'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PlanType: {
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  SEMIANNUAL: 'SEMIANNUAL',
  ANNUAL: 'ANNUAL'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StudentStatus = $Enums.StudentStatus

export const StudentStatus: typeof $Enums.StudentStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutPlan`: Exposes CRUD operations for the **WorkoutPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutPlans
    * const workoutPlans = await prisma.workoutPlan.findMany()
    * ```
    */
  get workoutPlan(): Prisma.WorkoutPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutExercise`: Exposes CRUD operations for the **WorkoutExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutExercises
    * const workoutExercises = await prisma.workoutExercise.findMany()
    * ```
    */
  get workoutExercise(): Prisma.WorkoutExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bodyRecord`: Exposes CRUD operations for the **BodyRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyRecords
    * const bodyRecords = await prisma.bodyRecord.findMany()
    * ```
    */
  get bodyRecord(): Prisma.BodyRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Student: 'Student',
    Payment: 'Payment',
    WorkoutPlan: 'WorkoutPlan',
    Exercise: 'Exercise',
    WorkoutExercise: 'WorkoutExercise',
    BodyRecord: 'BodyRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "student" | "payment" | "workoutPlan" | "exercise" | "workoutExercise" | "bodyRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      WorkoutPlan: {
        payload: Prisma.$WorkoutPlanPayload<ExtArgs>
        fields: Prisma.WorkoutPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          findFirst: {
            args: Prisma.WorkoutPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          findMany: {
            args: Prisma.WorkoutPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          create: {
            args: Prisma.WorkoutPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          createMany: {
            args: Prisma.WorkoutPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          delete: {
            args: Prisma.WorkoutPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          update: {
            args: Prisma.WorkoutPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          aggregate: {
            args: Prisma.WorkoutPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutPlan>
          }
          groupBy: {
            args: Prisma.WorkoutPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutPlanCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutPlanCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      WorkoutExercise: {
        payload: Prisma.$WorkoutExercisePayload<ExtArgs>
        fields: Prisma.WorkoutExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findFirst: {
            args: Prisma.WorkoutExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          findMany: {
            args: Prisma.WorkoutExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          create: {
            args: Prisma.WorkoutExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          createMany: {
            args: Prisma.WorkoutExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          delete: {
            args: Prisma.WorkoutExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          update: {
            args: Prisma.WorkoutExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          deleteMany: {
            args: Prisma.WorkoutExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>[]
          }
          upsert: {
            args: Prisma.WorkoutExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePayload>
          }
          aggregate: {
            args: Prisma.WorkoutExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutExercise>
          }
          groupBy: {
            args: Prisma.WorkoutExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExerciseCountAggregateOutputType> | number
          }
        }
      }
      BodyRecord: {
        payload: Prisma.$BodyRecordPayload<ExtArgs>
        fields: Prisma.BodyRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BodyRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BodyRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload>
          }
          findFirst: {
            args: Prisma.BodyRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BodyRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload>
          }
          findMany: {
            args: Prisma.BodyRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload>[]
          }
          create: {
            args: Prisma.BodyRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload>
          }
          createMany: {
            args: Prisma.BodyRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BodyRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload>[]
          }
          delete: {
            args: Prisma.BodyRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload>
          }
          update: {
            args: Prisma.BodyRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload>
          }
          deleteMany: {
            args: Prisma.BodyRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BodyRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BodyRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload>[]
          }
          upsert: {
            args: Prisma.BodyRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyRecordPayload>
          }
          aggregate: {
            args: Prisma.BodyRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBodyRecord>
          }
          groupBy: {
            args: Prisma.BodyRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<BodyRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.BodyRecordCountArgs<ExtArgs>
            result: $Utils.Optional<BodyRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    student?: StudentOmit
    payment?: PaymentOmit
    workoutPlan?: WorkoutPlanOmit
    exercise?: ExerciseOmit
    workoutExercise?: WorkoutExerciseOmit
    bodyRecord?: BodyRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workoutPlans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutPlans?: boolean | UserCountOutputTypeCountWorkoutPlansArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    payments: number
    bodyRecords: number
    workoutPlans: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | StudentCountOutputTypeCountPaymentsArgs
    bodyRecords?: boolean | StudentCountOutputTypeCountBodyRecordsArgs
    workoutPlans?: boolean | StudentCountOutputTypeCountWorkoutPlansArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountBodyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyRecordWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountWorkoutPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
  }


  /**
   * Count Type WorkoutPlanCountOutputType
   */

  export type WorkoutPlanCountOutputType = {
    exercises: number
  }

  export type WorkoutPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutPlanCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutPlanCountOutputType without action
   */
  export type WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlanCountOutputType
     */
    select?: WorkoutPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutPlanCountOutputType without action
   */
  export type WorkoutPlanCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    workoutItems: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutItems?: boolean | ExerciseCountOutputTypeCountWorkoutItemsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountWorkoutItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
    workoutPlans?: boolean | User$workoutPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
    workoutPlans?: boolean | User$workoutPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      workoutPlans: Prisma.$WorkoutPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workoutPlans<T extends User$workoutPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.workoutPlans
   */
  export type User$workoutPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    cursor?: WorkoutPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    birthDate: Date | null
    goal: string | null
    plan: $Enums.PlanType | null
    status: $Enums.StudentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    phone: string | null
    birthDate: Date | null
    goal: string | null
    plan: $Enums.PlanType | null
    status: $Enums.StudentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    phone: number
    birthDate: number
    goal: number
    plan: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    birthDate?: true
    goal?: true
    plan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    birthDate?: true
    goal?: true
    plan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    birthDate?: true
    goal?: true
    plan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    userId: string
    phone: string | null
    birthDate: Date | null
    goal: string | null
    plan: $Enums.PlanType
    status: $Enums.StudentStatus
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    birthDate?: boolean
    goal?: boolean
    plan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Student$paymentsArgs<ExtArgs>
    bodyRecords?: boolean | Student$bodyRecordsArgs<ExtArgs>
    workoutPlans?: boolean | Student$workoutPlansArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    birthDate?: boolean
    goal?: boolean
    plan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    birthDate?: boolean
    goal?: boolean
    plan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    phone?: boolean
    birthDate?: boolean
    goal?: boolean
    plan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "phone" | "birthDate" | "goal" | "plan" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Student$paymentsArgs<ExtArgs>
    bodyRecords?: boolean | Student$bodyRecordsArgs<ExtArgs>
    workoutPlans?: boolean | Student$workoutPlansArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      bodyRecords: Prisma.$BodyRecordPayload<ExtArgs>[]
      workoutPlans: Prisma.$WorkoutPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      phone: string | null
      birthDate: Date | null
      goal: string | null
      plan: $Enums.PlanType
      status: $Enums.StudentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Student$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bodyRecords<T extends Student$bodyRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Student$bodyRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workoutPlans<T extends Student$workoutPlansArgs<ExtArgs> = {}>(args?: Subset<T, Student$workoutPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly birthDate: FieldRef<"Student", 'DateTime'>
    readonly goal: FieldRef<"Student", 'String'>
    readonly plan: FieldRef<"Student", 'PlanType'>
    readonly status: FieldRef<"Student", 'StudentStatus'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.payments
   */
  export type Student$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Student.bodyRecords
   */
  export type Student$bodyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
    where?: BodyRecordWhereInput
    orderBy?: BodyRecordOrderByWithRelationInput | BodyRecordOrderByWithRelationInput[]
    cursor?: BodyRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BodyRecordScalarFieldEnum | BodyRecordScalarFieldEnum[]
  }

  /**
   * Student.workoutPlans
   */
  export type Student$workoutPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    cursor?: WorkoutPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    amount: Decimal | null
    dueDate: Date | null
    paidAt: Date | null
    status: $Enums.PaymentStatus | null
    note: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    amount: Decimal | null
    dueDate: Date | null
    paidAt: Date | null
    status: $Enums.PaymentStatus | null
    note: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    studentId: number
    amount: number
    dueDate: number
    paidAt: number
    status: number
    note: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    dueDate?: true
    paidAt?: true
    status?: true
    note?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    dueDate?: true
    paidAt?: true
    status?: true
    note?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    dueDate?: true
    paidAt?: true
    status?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    studentId: string
    amount: Decimal
    dueDate: Date
    paidAt: Date | null
    status: $Enums.PaymentStatus
    note: string | null
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    dueDate?: boolean
    paidAt?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    dueDate?: boolean
    paidAt?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    dueDate?: boolean
    paidAt?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    studentId?: boolean
    amount?: boolean
    dueDate?: boolean
    paidAt?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "amount" | "dueDate" | "paidAt" | "status" | "note" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      amount: Prisma.Decimal
      dueDate: Date
      paidAt: Date | null
      status: $Enums.PaymentStatus
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly studentId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly dueDate: FieldRef<"Payment", 'DateTime'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly note: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutPlan
   */

  export type AggregateWorkoutPlan = {
    _count: WorkoutPlanCountAggregateOutputType | null
    _min: WorkoutPlanMinAggregateOutputType | null
    _max: WorkoutPlanMaxAggregateOutputType | null
  }

  export type WorkoutPlanMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    createdById: string | null
    name: string | null
    description: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutPlanMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    createdById: string | null
    name: string | null
    description: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutPlanCountAggregateOutputType = {
    id: number
    studentId: number
    createdById: number
    name: number
    description: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkoutPlanMinAggregateInputType = {
    id?: true
    studentId?: true
    createdById?: true
    name?: true
    description?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutPlanMaxAggregateInputType = {
    id?: true
    studentId?: true
    createdById?: true
    name?: true
    description?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutPlanCountAggregateInputType = {
    id?: true
    studentId?: true
    createdById?: true
    name?: true
    description?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkoutPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutPlan to aggregate.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutPlans
    **/
    _count?: true | WorkoutPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutPlanMaxAggregateInputType
  }

  export type GetWorkoutPlanAggregateType<T extends WorkoutPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutPlan[P]>
      : GetScalarType<T[P], AggregateWorkoutPlan[P]>
  }




  export type WorkoutPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithAggregationInput | WorkoutPlanOrderByWithAggregationInput[]
    by: WorkoutPlanScalarFieldEnum[] | WorkoutPlanScalarFieldEnum
    having?: WorkoutPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutPlanCountAggregateInputType | true
    _min?: WorkoutPlanMinAggregateInputType
    _max?: WorkoutPlanMaxAggregateInputType
  }

  export type WorkoutPlanGroupByOutputType = {
    id: string
    studentId: string
    createdById: string
    name: string
    description: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkoutPlanCountAggregateOutputType | null
    _min: WorkoutPlanMinAggregateOutputType | null
    _max: WorkoutPlanMaxAggregateOutputType | null
  }

  type GetWorkoutPlanGroupByPayload<T extends WorkoutPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutPlanGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutPlanGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    createdById?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | WorkoutPlan$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    createdById?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    createdById?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectScalar = {
    id?: boolean
    studentId?: boolean
    createdById?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkoutPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "createdById" | "name" | "description" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["workoutPlan"]>
  export type WorkoutPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    exercises?: boolean | WorkoutPlan$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutPlan"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      exercises: Prisma.$WorkoutExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      createdById: string
      name: string
      description: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workoutPlan"]>
    composites: {}
  }

  type WorkoutPlanGetPayload<S extends boolean | null | undefined | WorkoutPlanDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPlanPayload, S>

  type WorkoutPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutPlanCountAggregateInputType | true
    }

  export interface WorkoutPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutPlan'], meta: { name: 'WorkoutPlan' } }
    /**
     * Find zero or one WorkoutPlan that matches the filter.
     * @param {WorkoutPlanFindUniqueArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutPlanFindUniqueArgs>(args: SelectSubset<T, WorkoutPlanFindUniqueArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutPlanFindUniqueOrThrowArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindFirstArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutPlanFindFirstArgs>(args?: SelectSubset<T, WorkoutPlanFindFirstArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindFirstOrThrowArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutPlans
     * const workoutPlans = await prisma.workoutPlan.findMany()
     * 
     * // Get first 10 WorkoutPlans
     * const workoutPlans = await prisma.workoutPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutPlanFindManyArgs>(args?: SelectSubset<T, WorkoutPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutPlan.
     * @param {WorkoutPlanCreateArgs} args - Arguments to create a WorkoutPlan.
     * @example
     * // Create one WorkoutPlan
     * const WorkoutPlan = await prisma.workoutPlan.create({
     *   data: {
     *     // ... data to create a WorkoutPlan
     *   }
     * })
     * 
     */
    create<T extends WorkoutPlanCreateArgs>(args: SelectSubset<T, WorkoutPlanCreateArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutPlans.
     * @param {WorkoutPlanCreateManyArgs} args - Arguments to create many WorkoutPlans.
     * @example
     * // Create many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutPlanCreateManyArgs>(args?: SelectSubset<T, WorkoutPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutPlans and returns the data saved in the database.
     * @param {WorkoutPlanCreateManyAndReturnArgs} args - Arguments to create many WorkoutPlans.
     * @example
     * // Create many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutPlans and only return the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutPlan.
     * @param {WorkoutPlanDeleteArgs} args - Arguments to delete one WorkoutPlan.
     * @example
     * // Delete one WorkoutPlan
     * const WorkoutPlan = await prisma.workoutPlan.delete({
     *   where: {
     *     // ... filter to delete one WorkoutPlan
     *   }
     * })
     * 
     */
    delete<T extends WorkoutPlanDeleteArgs>(args: SelectSubset<T, WorkoutPlanDeleteArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutPlan.
     * @param {WorkoutPlanUpdateArgs} args - Arguments to update one WorkoutPlan.
     * @example
     * // Update one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutPlanUpdateArgs>(args: SelectSubset<T, WorkoutPlanUpdateArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutPlans.
     * @param {WorkoutPlanDeleteManyArgs} args - Arguments to filter WorkoutPlans to delete.
     * @example
     * // Delete a few WorkoutPlans
     * const { count } = await prisma.workoutPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutPlanDeleteManyArgs>(args?: SelectSubset<T, WorkoutPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutPlanUpdateManyArgs>(args: SelectSubset<T, WorkoutPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutPlans and returns the data updated in the database.
     * @param {WorkoutPlanUpdateManyAndReturnArgs} args - Arguments to update many WorkoutPlans.
     * @example
     * // Update many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutPlans and only return the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutPlan.
     * @param {WorkoutPlanUpsertArgs} args - Arguments to update or create a WorkoutPlan.
     * @example
     * // Update or create a WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.upsert({
     *   create: {
     *     // ... data to create a WorkoutPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutPlan we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutPlanUpsertArgs>(args: SelectSubset<T, WorkoutPlanUpsertArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanCountArgs} args - Arguments to filter WorkoutPlans to count.
     * @example
     * // Count the number of WorkoutPlans
     * const count = await prisma.workoutPlan.count({
     *   where: {
     *     // ... the filter for the WorkoutPlans we want to count
     *   }
     * })
    **/
    count<T extends WorkoutPlanCountArgs>(
      args?: Subset<T, WorkoutPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutPlanAggregateArgs>(args: Subset<T, WorkoutPlanAggregateArgs>): Prisma.PrismaPromise<GetWorkoutPlanAggregateType<T>>

    /**
     * Group by WorkoutPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutPlanGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutPlan model
   */
  readonly fields: WorkoutPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends WorkoutPlan$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutPlan$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutPlan model
   */
  interface WorkoutPlanFieldRefs {
    readonly id: FieldRef<"WorkoutPlan", 'String'>
    readonly studentId: FieldRef<"WorkoutPlan", 'String'>
    readonly createdById: FieldRef<"WorkoutPlan", 'String'>
    readonly name: FieldRef<"WorkoutPlan", 'String'>
    readonly description: FieldRef<"WorkoutPlan", 'String'>
    readonly active: FieldRef<"WorkoutPlan", 'Boolean'>
    readonly createdAt: FieldRef<"WorkoutPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkoutPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutPlan findUnique
   */
  export type WorkoutPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan findUniqueOrThrow
   */
  export type WorkoutPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan findFirst
   */
  export type WorkoutPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutPlans.
     */
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan findFirstOrThrow
   */
  export type WorkoutPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutPlans.
     */
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan findMany
   */
  export type WorkoutPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlans to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan create
   */
  export type WorkoutPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutPlan.
     */
    data: XOR<WorkoutPlanCreateInput, WorkoutPlanUncheckedCreateInput>
  }

  /**
   * WorkoutPlan createMany
   */
  export type WorkoutPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutPlans.
     */
    data: WorkoutPlanCreateManyInput | WorkoutPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutPlan createManyAndReturn
   */
  export type WorkoutPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutPlans.
     */
    data: WorkoutPlanCreateManyInput | WorkoutPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutPlan update
   */
  export type WorkoutPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutPlan.
     */
    data: XOR<WorkoutPlanUpdateInput, WorkoutPlanUncheckedUpdateInput>
    /**
     * Choose, which WorkoutPlan to update.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan updateMany
   */
  export type WorkoutPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutPlans.
     */
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutPlans to update
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to update.
     */
    limit?: number
  }

  /**
   * WorkoutPlan updateManyAndReturn
   */
  export type WorkoutPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutPlans.
     */
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutPlans to update
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutPlan upsert
   */
  export type WorkoutPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutPlan to update in case it exists.
     */
    where: WorkoutPlanWhereUniqueInput
    /**
     * In case the WorkoutPlan found by the `where` argument doesn't exist, create a new WorkoutPlan with this data.
     */
    create: XOR<WorkoutPlanCreateInput, WorkoutPlanUncheckedCreateInput>
    /**
     * In case the WorkoutPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutPlanUpdateInput, WorkoutPlanUncheckedUpdateInput>
  }

  /**
   * WorkoutPlan delete
   */
  export type WorkoutPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter which WorkoutPlan to delete.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan deleteMany
   */
  export type WorkoutPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutPlans to delete
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to delete.
     */
    limit?: number
  }

  /**
   * WorkoutPlan.exercises
   */
  export type WorkoutPlan$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutPlan without action
   */
  export type WorkoutPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    muscleGroup: string | null
    description: string | null
    gifUrl: string | null
    createdAt: Date | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    muscleGroup: string | null
    description: string | null
    gifUrl: string | null
    createdAt: Date | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    muscleGroup: number
    description: number
    gifUrl: number
    createdAt: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    muscleGroup?: true
    description?: true
    gifUrl?: true
    createdAt?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    muscleGroup?: true
    description?: true
    gifUrl?: true
    createdAt?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    muscleGroup?: true
    description?: true
    gifUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    name: string
    muscleGroup: string
    description: string | null
    gifUrl: string | null
    createdAt: Date
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    description?: boolean
    gifUrl?: boolean
    createdAt?: boolean
    workoutItems?: boolean | Exercise$workoutItemsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    description?: boolean
    gifUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    description?: boolean
    gifUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    description?: boolean
    gifUrl?: boolean
    createdAt?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "muscleGroup" | "description" | "gifUrl" | "createdAt", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutItems?: boolean | Exercise$workoutItemsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      workoutItems: Prisma.$WorkoutExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      muscleGroup: string
      description: string | null
      gifUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutItems<T extends Exercise$workoutItemsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$workoutItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly muscleGroup: FieldRef<"Exercise", 'String'>
    readonly description: FieldRef<"Exercise", 'String'>
    readonly gifUrl: FieldRef<"Exercise", 'String'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.workoutItems
   */
  export type Exercise$workoutItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    cursor?: WorkoutExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutExercise
   */

  export type AggregateWorkoutExercise = {
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  export type WorkoutExerciseAvgAggregateOutputType = {
    sets: number | null
    order: number | null
  }

  export type WorkoutExerciseSumAggregateOutputType = {
    sets: number | null
    order: number | null
  }

  export type WorkoutExerciseMinAggregateOutputType = {
    id: string | null
    workoutPlanId: string | null
    exerciseId: string | null
    sets: number | null
    reps: string | null
    load: string | null
    rest: string | null
    order: number | null
  }

  export type WorkoutExerciseMaxAggregateOutputType = {
    id: string | null
    workoutPlanId: string | null
    exerciseId: string | null
    sets: number | null
    reps: string | null
    load: string | null
    rest: string | null
    order: number | null
  }

  export type WorkoutExerciseCountAggregateOutputType = {
    id: number
    workoutPlanId: number
    exerciseId: number
    sets: number
    reps: number
    load: number
    rest: number
    order: number
    _all: number
  }


  export type WorkoutExerciseAvgAggregateInputType = {
    sets?: true
    order?: true
  }

  export type WorkoutExerciseSumAggregateInputType = {
    sets?: true
    order?: true
  }

  export type WorkoutExerciseMinAggregateInputType = {
    id?: true
    workoutPlanId?: true
    exerciseId?: true
    sets?: true
    reps?: true
    load?: true
    rest?: true
    order?: true
  }

  export type WorkoutExerciseMaxAggregateInputType = {
    id?: true
    workoutPlanId?: true
    exerciseId?: true
    sets?: true
    reps?: true
    load?: true
    rest?: true
    order?: true
  }

  export type WorkoutExerciseCountAggregateInputType = {
    id?: true
    workoutPlanId?: true
    exerciseId?: true
    sets?: true
    reps?: true
    load?: true
    rest?: true
    order?: true
    _all?: true
  }

  export type WorkoutExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercise to aggregate.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutExercises
    **/
    _count?: true | WorkoutExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type GetWorkoutExerciseAggregateType<T extends WorkoutExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutExercise[P]>
      : GetScalarType<T[P], AggregateWorkoutExercise[P]>
  }




  export type WorkoutExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExerciseWhereInput
    orderBy?: WorkoutExerciseOrderByWithAggregationInput | WorkoutExerciseOrderByWithAggregationInput[]
    by: WorkoutExerciseScalarFieldEnum[] | WorkoutExerciseScalarFieldEnum
    having?: WorkoutExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutExerciseCountAggregateInputType | true
    _avg?: WorkoutExerciseAvgAggregateInputType
    _sum?: WorkoutExerciseSumAggregateInputType
    _min?: WorkoutExerciseMinAggregateInputType
    _max?: WorkoutExerciseMaxAggregateInputType
  }

  export type WorkoutExerciseGroupByOutputType = {
    id: string
    workoutPlanId: string
    exerciseId: string
    sets: number
    reps: string
    load: string | null
    rest: string | null
    order: number
    _count: WorkoutExerciseCountAggregateOutputType | null
    _avg: WorkoutExerciseAvgAggregateOutputType | null
    _sum: WorkoutExerciseSumAggregateOutputType | null
    _min: WorkoutExerciseMinAggregateOutputType | null
    _max: WorkoutExerciseMaxAggregateOutputType | null
  }

  type GetWorkoutExerciseGroupByPayload<T extends WorkoutExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutExerciseGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutPlanId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    load?: boolean
    rest?: boolean
    order?: boolean
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutPlanId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    load?: boolean
    rest?: boolean
    order?: boolean
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutPlanId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    load?: boolean
    rest?: boolean
    order?: boolean
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercise"]>

  export type WorkoutExerciseSelectScalar = {
    id?: boolean
    workoutPlanId?: boolean
    exerciseId?: boolean
    sets?: boolean
    reps?: boolean
    load?: boolean
    rest?: boolean
    order?: boolean
  }

  export type WorkoutExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutPlanId" | "exerciseId" | "sets" | "reps" | "load" | "rest" | "order", ExtArgs["result"]["workoutExercise"]>
  export type WorkoutExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $WorkoutExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutExercise"
    objects: {
      workoutPlan: Prisma.$WorkoutPlanPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workoutPlanId: string
      exerciseId: string
      sets: number
      reps: string
      load: string | null
      rest: string | null
      order: number
    }, ExtArgs["result"]["workoutExercise"]>
    composites: {}
  }

  type WorkoutExerciseGetPayload<S extends boolean | null | undefined | WorkoutExerciseDefaultArgs> = $Result.GetResult<Prisma.$WorkoutExercisePayload, S>

  type WorkoutExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutExerciseCountAggregateInputType | true
    }

  export interface WorkoutExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutExercise'], meta: { name: 'WorkoutExercise' } }
    /**
     * Find zero or one WorkoutExercise that matches the filter.
     * @param {WorkoutExerciseFindUniqueArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutExerciseFindUniqueArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutExerciseFindUniqueOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutExerciseFindFirstArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindFirstOrThrowArgs} args - Arguments to find a WorkoutExercise
     * @example
     * // Get one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany()
     * 
     * // Get first 10 WorkoutExercises
     * const workoutExercises = await prisma.workoutExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutExerciseFindManyArgs>(args?: SelectSubset<T, WorkoutExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutExercise.
     * @param {WorkoutExerciseCreateArgs} args - Arguments to create a WorkoutExercise.
     * @example
     * // Create one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.create({
     *   data: {
     *     // ... data to create a WorkoutExercise
     *   }
     * })
     * 
     */
    create<T extends WorkoutExerciseCreateArgs>(args: SelectSubset<T, WorkoutExerciseCreateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutExercises.
     * @param {WorkoutExerciseCreateManyArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutExerciseCreateManyArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutExercises and returns the data saved in the database.
     * @param {WorkoutExerciseCreateManyAndReturnArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutExercises and only return the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutExercise.
     * @param {WorkoutExerciseDeleteArgs} args - Arguments to delete one WorkoutExercise.
     * @example
     * // Delete one WorkoutExercise
     * const WorkoutExercise = await prisma.workoutExercise.delete({
     *   where: {
     *     // ... filter to delete one WorkoutExercise
     *   }
     * })
     * 
     */
    delete<T extends WorkoutExerciseDeleteArgs>(args: SelectSubset<T, WorkoutExerciseDeleteArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutExercise.
     * @param {WorkoutExerciseUpdateArgs} args - Arguments to update one WorkoutExercise.
     * @example
     * // Update one WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutExerciseUpdateArgs>(args: SelectSubset<T, WorkoutExerciseUpdateArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutExercises.
     * @param {WorkoutExerciseDeleteManyArgs} args - Arguments to filter WorkoutExercises to delete.
     * @example
     * // Delete a few WorkoutExercises
     * const { count } = await prisma.workoutExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutExerciseDeleteManyArgs>(args?: SelectSubset<T, WorkoutExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutExerciseUpdateManyArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises and returns the data updated in the database.
     * @param {WorkoutExerciseUpdateManyAndReturnArgs} args - Arguments to update many WorkoutExercises.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercise = await prisma.workoutExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutExercises and only return the `id`
     * const workoutExerciseWithIdOnly = await prisma.workoutExercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutExercise.
     * @param {WorkoutExerciseUpsertArgs} args - Arguments to update or create a WorkoutExercise.
     * @example
     * // Update or create a WorkoutExercise
     * const workoutExercise = await prisma.workoutExercise.upsert({
     *   create: {
     *     // ... data to create a WorkoutExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutExercise we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutExerciseUpsertArgs>(args: SelectSubset<T, WorkoutExerciseUpsertArgs<ExtArgs>>): Prisma__WorkoutExerciseClient<$Result.GetResult<Prisma.$WorkoutExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseCountArgs} args - Arguments to filter WorkoutExercises to count.
     * @example
     * // Count the number of WorkoutExercises
     * const count = await prisma.workoutExercise.count({
     *   where: {
     *     // ... the filter for the WorkoutExercises we want to count
     *   }
     * })
    **/
    count<T extends WorkoutExerciseCountArgs>(
      args?: Subset<T, WorkoutExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutExerciseAggregateArgs>(args: Subset<T, WorkoutExerciseAggregateArgs>): Prisma.PrismaPromise<GetWorkoutExerciseAggregateType<T>>

    /**
     * Group by WorkoutExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutExerciseGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutExercise model
   */
  readonly fields: WorkoutExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutPlan<T extends WorkoutPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutPlanDefaultArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutExercise model
   */
  interface WorkoutExerciseFieldRefs {
    readonly id: FieldRef<"WorkoutExercise", 'String'>
    readonly workoutPlanId: FieldRef<"WorkoutExercise", 'String'>
    readonly exerciseId: FieldRef<"WorkoutExercise", 'String'>
    readonly sets: FieldRef<"WorkoutExercise", 'Int'>
    readonly reps: FieldRef<"WorkoutExercise", 'String'>
    readonly load: FieldRef<"WorkoutExercise", 'String'>
    readonly rest: FieldRef<"WorkoutExercise", 'String'>
    readonly order: FieldRef<"WorkoutExercise", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutExercise findUnique
   */
  export type WorkoutExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findUniqueOrThrow
   */
  export type WorkoutExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise findFirst
   */
  export type WorkoutExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findFirstOrThrow
   */
  export type WorkoutExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercise to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise findMany
   */
  export type WorkoutExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExerciseOrderByWithRelationInput | WorkoutExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutExercises.
     */
    cursor?: WorkoutExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    distinct?: WorkoutExerciseScalarFieldEnum | WorkoutExerciseScalarFieldEnum[]
  }

  /**
   * WorkoutExercise create
   */
  export type WorkoutExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
  }

  /**
   * WorkoutExercise createMany
   */
  export type WorkoutExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutExercise createManyAndReturn
   */
  export type WorkoutExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExerciseCreateManyInput | WorkoutExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise update
   */
  export type WorkoutExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutExercise.
     */
    data: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
    /**
     * Choose, which WorkoutExercise to update.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise updateMany
   */
  export type WorkoutExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
  }

  /**
   * WorkoutExercise updateManyAndReturn
   */
  export type WorkoutExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercise upsert
   */
  export type WorkoutExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutExercise to update in case it exists.
     */
    where: WorkoutExerciseWhereUniqueInput
    /**
     * In case the WorkoutExercise found by the `where` argument doesn't exist, create a new WorkoutExercise with this data.
     */
    create: XOR<WorkoutExerciseCreateInput, WorkoutExerciseUncheckedCreateInput>
    /**
     * In case the WorkoutExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutExerciseUpdateInput, WorkoutExerciseUncheckedUpdateInput>
  }

  /**
   * WorkoutExercise delete
   */
  export type WorkoutExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
    /**
     * Filter which WorkoutExercise to delete.
     */
    where: WorkoutExerciseWhereUniqueInput
  }

  /**
   * WorkoutExercise deleteMany
   */
  export type WorkoutExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercises to delete
     */
    where?: WorkoutExerciseWhereInput
    /**
     * Limit how many WorkoutExercises to delete.
     */
    limit?: number
  }

  /**
   * WorkoutExercise without action
   */
  export type WorkoutExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercise
     */
    select?: WorkoutExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercise
     */
    omit?: WorkoutExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExerciseInclude<ExtArgs> | null
  }


  /**
   * Model BodyRecord
   */

  export type AggregateBodyRecord = {
    _count: BodyRecordCountAggregateOutputType | null
    _avg: BodyRecordAvgAggregateOutputType | null
    _sum: BodyRecordSumAggregateOutputType | null
    _min: BodyRecordMinAggregateOutputType | null
    _max: BodyRecordMaxAggregateOutputType | null
  }

  export type BodyRecordAvgAggregateOutputType = {
    weight: Decimal | null
    height: Decimal | null
    bodyFat: Decimal | null
  }

  export type BodyRecordSumAggregateOutputType = {
    weight: Decimal | null
    height: Decimal | null
    bodyFat: Decimal | null
  }

  export type BodyRecordMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    weight: Decimal | null
    height: Decimal | null
    bodyFat: Decimal | null
    notes: string | null
    recordedAt: Date | null
  }

  export type BodyRecordMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    weight: Decimal | null
    height: Decimal | null
    bodyFat: Decimal | null
    notes: string | null
    recordedAt: Date | null
  }

  export type BodyRecordCountAggregateOutputType = {
    id: number
    studentId: number
    weight: number
    height: number
    bodyFat: number
    notes: number
    recordedAt: number
    _all: number
  }


  export type BodyRecordAvgAggregateInputType = {
    weight?: true
    height?: true
    bodyFat?: true
  }

  export type BodyRecordSumAggregateInputType = {
    weight?: true
    height?: true
    bodyFat?: true
  }

  export type BodyRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    weight?: true
    height?: true
    bodyFat?: true
    notes?: true
    recordedAt?: true
  }

  export type BodyRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    weight?: true
    height?: true
    bodyFat?: true
    notes?: true
    recordedAt?: true
  }

  export type BodyRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    weight?: true
    height?: true
    bodyFat?: true
    notes?: true
    recordedAt?: true
    _all?: true
  }

  export type BodyRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyRecord to aggregate.
     */
    where?: BodyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyRecords to fetch.
     */
    orderBy?: BodyRecordOrderByWithRelationInput | BodyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BodyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyRecords
    **/
    _count?: true | BodyRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BodyRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BodyRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyRecordMaxAggregateInputType
  }

  export type GetBodyRecordAggregateType<T extends BodyRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyRecord[P]>
      : GetScalarType<T[P], AggregateBodyRecord[P]>
  }




  export type BodyRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyRecordWhereInput
    orderBy?: BodyRecordOrderByWithAggregationInput | BodyRecordOrderByWithAggregationInput[]
    by: BodyRecordScalarFieldEnum[] | BodyRecordScalarFieldEnum
    having?: BodyRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyRecordCountAggregateInputType | true
    _avg?: BodyRecordAvgAggregateInputType
    _sum?: BodyRecordSumAggregateInputType
    _min?: BodyRecordMinAggregateInputType
    _max?: BodyRecordMaxAggregateInputType
  }

  export type BodyRecordGroupByOutputType = {
    id: string
    studentId: string
    weight: Decimal | null
    height: Decimal | null
    bodyFat: Decimal | null
    notes: string | null
    recordedAt: Date
    _count: BodyRecordCountAggregateOutputType | null
    _avg: BodyRecordAvgAggregateOutputType | null
    _sum: BodyRecordSumAggregateOutputType | null
    _min: BodyRecordMinAggregateOutputType | null
    _max: BodyRecordMaxAggregateOutputType | null
  }

  type GetBodyRecordGroupByPayload<T extends BodyRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BodyRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyRecordGroupByOutputType[P]>
            : GetScalarType<T[P], BodyRecordGroupByOutputType[P]>
        }
      >
    >


  export type BodyRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    weight?: boolean
    height?: boolean
    bodyFat?: boolean
    notes?: boolean
    recordedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyRecord"]>

  export type BodyRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    weight?: boolean
    height?: boolean
    bodyFat?: boolean
    notes?: boolean
    recordedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyRecord"]>

  export type BodyRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    weight?: boolean
    height?: boolean
    bodyFat?: boolean
    notes?: boolean
    recordedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyRecord"]>

  export type BodyRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    weight?: boolean
    height?: boolean
    bodyFat?: boolean
    notes?: boolean
    recordedAt?: boolean
  }

  export type BodyRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "weight" | "height" | "bodyFat" | "notes" | "recordedAt", ExtArgs["result"]["bodyRecord"]>
  export type BodyRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type BodyRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type BodyRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $BodyRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BodyRecord"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      weight: Prisma.Decimal | null
      height: Prisma.Decimal | null
      bodyFat: Prisma.Decimal | null
      notes: string | null
      recordedAt: Date
    }, ExtArgs["result"]["bodyRecord"]>
    composites: {}
  }

  type BodyRecordGetPayload<S extends boolean | null | undefined | BodyRecordDefaultArgs> = $Result.GetResult<Prisma.$BodyRecordPayload, S>

  type BodyRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BodyRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BodyRecordCountAggregateInputType | true
    }

  export interface BodyRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BodyRecord'], meta: { name: 'BodyRecord' } }
    /**
     * Find zero or one BodyRecord that matches the filter.
     * @param {BodyRecordFindUniqueArgs} args - Arguments to find a BodyRecord
     * @example
     * // Get one BodyRecord
     * const bodyRecord = await prisma.bodyRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BodyRecordFindUniqueArgs>(args: SelectSubset<T, BodyRecordFindUniqueArgs<ExtArgs>>): Prisma__BodyRecordClient<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BodyRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BodyRecordFindUniqueOrThrowArgs} args - Arguments to find a BodyRecord
     * @example
     * // Get one BodyRecord
     * const bodyRecord = await prisma.bodyRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BodyRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, BodyRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BodyRecordClient<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyRecordFindFirstArgs} args - Arguments to find a BodyRecord
     * @example
     * // Get one BodyRecord
     * const bodyRecord = await prisma.bodyRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BodyRecordFindFirstArgs>(args?: SelectSubset<T, BodyRecordFindFirstArgs<ExtArgs>>): Prisma__BodyRecordClient<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyRecordFindFirstOrThrowArgs} args - Arguments to find a BodyRecord
     * @example
     * // Get one BodyRecord
     * const bodyRecord = await prisma.bodyRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BodyRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, BodyRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__BodyRecordClient<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BodyRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyRecords
     * const bodyRecords = await prisma.bodyRecord.findMany()
     * 
     * // Get first 10 BodyRecords
     * const bodyRecords = await prisma.bodyRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bodyRecordWithIdOnly = await prisma.bodyRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BodyRecordFindManyArgs>(args?: SelectSubset<T, BodyRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BodyRecord.
     * @param {BodyRecordCreateArgs} args - Arguments to create a BodyRecord.
     * @example
     * // Create one BodyRecord
     * const BodyRecord = await prisma.bodyRecord.create({
     *   data: {
     *     // ... data to create a BodyRecord
     *   }
     * })
     * 
     */
    create<T extends BodyRecordCreateArgs>(args: SelectSubset<T, BodyRecordCreateArgs<ExtArgs>>): Prisma__BodyRecordClient<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BodyRecords.
     * @param {BodyRecordCreateManyArgs} args - Arguments to create many BodyRecords.
     * @example
     * // Create many BodyRecords
     * const bodyRecord = await prisma.bodyRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BodyRecordCreateManyArgs>(args?: SelectSubset<T, BodyRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BodyRecords and returns the data saved in the database.
     * @param {BodyRecordCreateManyAndReturnArgs} args - Arguments to create many BodyRecords.
     * @example
     * // Create many BodyRecords
     * const bodyRecord = await prisma.bodyRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BodyRecords and only return the `id`
     * const bodyRecordWithIdOnly = await prisma.bodyRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BodyRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, BodyRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BodyRecord.
     * @param {BodyRecordDeleteArgs} args - Arguments to delete one BodyRecord.
     * @example
     * // Delete one BodyRecord
     * const BodyRecord = await prisma.bodyRecord.delete({
     *   where: {
     *     // ... filter to delete one BodyRecord
     *   }
     * })
     * 
     */
    delete<T extends BodyRecordDeleteArgs>(args: SelectSubset<T, BodyRecordDeleteArgs<ExtArgs>>): Prisma__BodyRecordClient<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BodyRecord.
     * @param {BodyRecordUpdateArgs} args - Arguments to update one BodyRecord.
     * @example
     * // Update one BodyRecord
     * const bodyRecord = await prisma.bodyRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BodyRecordUpdateArgs>(args: SelectSubset<T, BodyRecordUpdateArgs<ExtArgs>>): Prisma__BodyRecordClient<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BodyRecords.
     * @param {BodyRecordDeleteManyArgs} args - Arguments to filter BodyRecords to delete.
     * @example
     * // Delete a few BodyRecords
     * const { count } = await prisma.bodyRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BodyRecordDeleteManyArgs>(args?: SelectSubset<T, BodyRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyRecords
     * const bodyRecord = await prisma.bodyRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BodyRecordUpdateManyArgs>(args: SelectSubset<T, BodyRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyRecords and returns the data updated in the database.
     * @param {BodyRecordUpdateManyAndReturnArgs} args - Arguments to update many BodyRecords.
     * @example
     * // Update many BodyRecords
     * const bodyRecord = await prisma.bodyRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BodyRecords and only return the `id`
     * const bodyRecordWithIdOnly = await prisma.bodyRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BodyRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, BodyRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BodyRecord.
     * @param {BodyRecordUpsertArgs} args - Arguments to update or create a BodyRecord.
     * @example
     * // Update or create a BodyRecord
     * const bodyRecord = await prisma.bodyRecord.upsert({
     *   create: {
     *     // ... data to create a BodyRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyRecord we want to update
     *   }
     * })
     */
    upsert<T extends BodyRecordUpsertArgs>(args: SelectSubset<T, BodyRecordUpsertArgs<ExtArgs>>): Prisma__BodyRecordClient<$Result.GetResult<Prisma.$BodyRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BodyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyRecordCountArgs} args - Arguments to filter BodyRecords to count.
     * @example
     * // Count the number of BodyRecords
     * const count = await prisma.bodyRecord.count({
     *   where: {
     *     // ... the filter for the BodyRecords we want to count
     *   }
     * })
    **/
    count<T extends BodyRecordCountArgs>(
      args?: Subset<T, BodyRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BodyRecordAggregateArgs>(args: Subset<T, BodyRecordAggregateArgs>): Prisma.PrismaPromise<GetBodyRecordAggregateType<T>>

    /**
     * Group by BodyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BodyRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyRecordGroupByArgs['orderBy'] }
        : { orderBy?: BodyRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BodyRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BodyRecord model
   */
  readonly fields: BodyRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BodyRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BodyRecord model
   */
  interface BodyRecordFieldRefs {
    readonly id: FieldRef<"BodyRecord", 'String'>
    readonly studentId: FieldRef<"BodyRecord", 'String'>
    readonly weight: FieldRef<"BodyRecord", 'Decimal'>
    readonly height: FieldRef<"BodyRecord", 'Decimal'>
    readonly bodyFat: FieldRef<"BodyRecord", 'Decimal'>
    readonly notes: FieldRef<"BodyRecord", 'String'>
    readonly recordedAt: FieldRef<"BodyRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BodyRecord findUnique
   */
  export type BodyRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
    /**
     * Filter, which BodyRecord to fetch.
     */
    where: BodyRecordWhereUniqueInput
  }

  /**
   * BodyRecord findUniqueOrThrow
   */
  export type BodyRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
    /**
     * Filter, which BodyRecord to fetch.
     */
    where: BodyRecordWhereUniqueInput
  }

  /**
   * BodyRecord findFirst
   */
  export type BodyRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
    /**
     * Filter, which BodyRecord to fetch.
     */
    where?: BodyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyRecords to fetch.
     */
    orderBy?: BodyRecordOrderByWithRelationInput | BodyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyRecords.
     */
    cursor?: BodyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyRecords.
     */
    distinct?: BodyRecordScalarFieldEnum | BodyRecordScalarFieldEnum[]
  }

  /**
   * BodyRecord findFirstOrThrow
   */
  export type BodyRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
    /**
     * Filter, which BodyRecord to fetch.
     */
    where?: BodyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyRecords to fetch.
     */
    orderBy?: BodyRecordOrderByWithRelationInput | BodyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyRecords.
     */
    cursor?: BodyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyRecords.
     */
    distinct?: BodyRecordScalarFieldEnum | BodyRecordScalarFieldEnum[]
  }

  /**
   * BodyRecord findMany
   */
  export type BodyRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
    /**
     * Filter, which BodyRecords to fetch.
     */
    where?: BodyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyRecords to fetch.
     */
    orderBy?: BodyRecordOrderByWithRelationInput | BodyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyRecords.
     */
    cursor?: BodyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyRecords.
     */
    skip?: number
    distinct?: BodyRecordScalarFieldEnum | BodyRecordScalarFieldEnum[]
  }

  /**
   * BodyRecord create
   */
  export type BodyRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a BodyRecord.
     */
    data: XOR<BodyRecordCreateInput, BodyRecordUncheckedCreateInput>
  }

  /**
   * BodyRecord createMany
   */
  export type BodyRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BodyRecords.
     */
    data: BodyRecordCreateManyInput | BodyRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyRecord createManyAndReturn
   */
  export type BodyRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * The data used to create many BodyRecords.
     */
    data: BodyRecordCreateManyInput | BodyRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyRecord update
   */
  export type BodyRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a BodyRecord.
     */
    data: XOR<BodyRecordUpdateInput, BodyRecordUncheckedUpdateInput>
    /**
     * Choose, which BodyRecord to update.
     */
    where: BodyRecordWhereUniqueInput
  }

  /**
   * BodyRecord updateMany
   */
  export type BodyRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BodyRecords.
     */
    data: XOR<BodyRecordUpdateManyMutationInput, BodyRecordUncheckedUpdateManyInput>
    /**
     * Filter which BodyRecords to update
     */
    where?: BodyRecordWhereInput
    /**
     * Limit how many BodyRecords to update.
     */
    limit?: number
  }

  /**
   * BodyRecord updateManyAndReturn
   */
  export type BodyRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * The data used to update BodyRecords.
     */
    data: XOR<BodyRecordUpdateManyMutationInput, BodyRecordUncheckedUpdateManyInput>
    /**
     * Filter which BodyRecords to update
     */
    where?: BodyRecordWhereInput
    /**
     * Limit how many BodyRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyRecord upsert
   */
  export type BodyRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the BodyRecord to update in case it exists.
     */
    where: BodyRecordWhereUniqueInput
    /**
     * In case the BodyRecord found by the `where` argument doesn't exist, create a new BodyRecord with this data.
     */
    create: XOR<BodyRecordCreateInput, BodyRecordUncheckedCreateInput>
    /**
     * In case the BodyRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BodyRecordUpdateInput, BodyRecordUncheckedUpdateInput>
  }

  /**
   * BodyRecord delete
   */
  export type BodyRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
    /**
     * Filter which BodyRecord to delete.
     */
    where: BodyRecordWhereUniqueInput
  }

  /**
   * BodyRecord deleteMany
   */
  export type BodyRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyRecords to delete
     */
    where?: BodyRecordWhereInput
    /**
     * Limit how many BodyRecords to delete.
     */
    limit?: number
  }

  /**
   * BodyRecord without action
   */
  export type BodyRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyRecord
     */
    select?: BodyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyRecord
     */
    omit?: BodyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    phone: 'phone',
    birthDate: 'birthDate',
    goal: 'goal',
    plan: 'plan',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    amount: 'amount',
    dueDate: 'dueDate',
    paidAt: 'paidAt',
    status: 'status',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const WorkoutPlanScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    createdById: 'createdById',
    name: 'name',
    description: 'description',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkoutPlanScalarFieldEnum = (typeof WorkoutPlanScalarFieldEnum)[keyof typeof WorkoutPlanScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    muscleGroup: 'muscleGroup',
    description: 'description',
    gifUrl: 'gifUrl',
    createdAt: 'createdAt'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const WorkoutExerciseScalarFieldEnum: {
    id: 'id',
    workoutPlanId: 'workoutPlanId',
    exerciseId: 'exerciseId',
    sets: 'sets',
    reps: 'reps',
    load: 'load',
    rest: 'rest',
    order: 'order'
  };

  export type WorkoutExerciseScalarFieldEnum = (typeof WorkoutExerciseScalarFieldEnum)[keyof typeof WorkoutExerciseScalarFieldEnum]


  export const BodyRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    weight: 'weight',
    height: 'height',
    bodyFat: 'bodyFat',
    notes: 'notes',
    recordedAt: 'recordedAt'
  };

  export type BodyRecordScalarFieldEnum = (typeof BodyRecordScalarFieldEnum)[keyof typeof BodyRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'StudentStatus'
   */
  export type EnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus'>
    


  /**
   * Reference to a field of type 'StudentStatus[]'
   */
  export type ListEnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    workoutPlans?: WorkoutPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    workoutPlans?: WorkoutPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    workoutPlans?: WorkoutPlanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    birthDate?: DateTimeNullableFilter<"Student"> | Date | string | null
    goal?: StringNullableFilter<"Student"> | string | null
    plan?: EnumPlanTypeFilter<"Student"> | $Enums.PlanType
    status?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
    bodyRecords?: BodyRecordListRelationFilter
    workoutPlans?: WorkoutPlanListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    plan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    bodyRecords?: BodyRecordOrderByRelationAggregateInput
    workoutPlans?: WorkoutPlanOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    phone?: StringNullableFilter<"Student"> | string | null
    birthDate?: DateTimeNullableFilter<"Student"> | Date | string | null
    goal?: StringNullableFilter<"Student"> | string | null
    plan?: EnumPlanTypeFilter<"Student"> | $Enums.PlanType
    status?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
    bodyRecords?: BodyRecordListRelationFilter
    workoutPlans?: WorkoutPlanListRelationFilter
  }, "id" | "userId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    plan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    userId?: StringWithAggregatesFilter<"Student"> | string
    phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    goal?: StringNullableWithAggregatesFilter<"Student"> | string | null
    plan?: EnumPlanTypeWithAggregatesFilter<"Student"> | $Enums.PlanType
    status?: EnumStudentStatusWithAggregatesFilter<"Student"> | $Enums.StudentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    studentId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    note?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    studentId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    note?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    studentId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    note?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type WorkoutPlanWhereInput = {
    AND?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    OR?: WorkoutPlanWhereInput[]
    NOT?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    id?: StringFilter<"WorkoutPlan"> | string
    studentId?: StringFilter<"WorkoutPlan"> | string
    createdById?: StringFilter<"WorkoutPlan"> | string
    name?: StringFilter<"WorkoutPlan"> | string
    description?: StringNullableFilter<"WorkoutPlan"> | string | null
    active?: BoolFilter<"WorkoutPlan"> | boolean
    createdAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: WorkoutExerciseListRelationFilter
  }

  export type WorkoutPlanOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdById?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    exercises?: WorkoutExerciseOrderByRelationAggregateInput
  }

  export type WorkoutPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    OR?: WorkoutPlanWhereInput[]
    NOT?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    studentId?: StringFilter<"WorkoutPlan"> | string
    createdById?: StringFilter<"WorkoutPlan"> | string
    name?: StringFilter<"WorkoutPlan"> | string
    description?: StringNullableFilter<"WorkoutPlan"> | string | null
    active?: BoolFilter<"WorkoutPlan"> | boolean
    createdAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    exercises?: WorkoutExerciseListRelationFilter
  }, "id">

  export type WorkoutPlanOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdById?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkoutPlanCountOrderByAggregateInput
    _max?: WorkoutPlanMaxOrderByAggregateInput
    _min?: WorkoutPlanMinOrderByAggregateInput
  }

  export type WorkoutPlanScalarWhereWithAggregatesInput = {
    AND?: WorkoutPlanScalarWhereWithAggregatesInput | WorkoutPlanScalarWhereWithAggregatesInput[]
    OR?: WorkoutPlanScalarWhereWithAggregatesInput[]
    NOT?: WorkoutPlanScalarWhereWithAggregatesInput | WorkoutPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    studentId?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    createdById?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    name?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    description?: StringNullableWithAggregatesFilter<"WorkoutPlan"> | string | null
    active?: BoolWithAggregatesFilter<"WorkoutPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkoutPlan"> | Date | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    gifUrl?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    workoutItems?: WorkoutExerciseListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    description?: SortOrderInput | SortOrder
    gifUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workoutItems?: WorkoutExerciseOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    description?: StringNullableFilter<"Exercise"> | string | null
    gifUrl?: StringNullableFilter<"Exercise"> | string | null
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    workoutItems?: WorkoutExerciseListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    description?: SortOrderInput | SortOrder
    gifUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    muscleGroup?: StringWithAggregatesFilter<"Exercise"> | string
    description?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    gifUrl?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
  }

  export type WorkoutExerciseWhereInput = {
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    id?: StringFilter<"WorkoutExercise"> | string
    workoutPlanId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    sets?: IntFilter<"WorkoutExercise"> | number
    reps?: StringFilter<"WorkoutExercise"> | string
    load?: StringNullableFilter<"WorkoutExercise"> | string | null
    rest?: StringNullableFilter<"WorkoutExercise"> | string | null
    order?: IntFilter<"WorkoutExercise"> | number
    workoutPlan?: XOR<WorkoutPlanScalarRelationFilter, WorkoutPlanWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type WorkoutExerciseOrderByWithRelationInput = {
    id?: SortOrder
    workoutPlanId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    load?: SortOrderInput | SortOrder
    rest?: SortOrderInput | SortOrder
    order?: SortOrder
    workoutPlan?: WorkoutPlanOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type WorkoutExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    OR?: WorkoutExerciseWhereInput[]
    NOT?: WorkoutExerciseWhereInput | WorkoutExerciseWhereInput[]
    workoutPlanId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    sets?: IntFilter<"WorkoutExercise"> | number
    reps?: StringFilter<"WorkoutExercise"> | string
    load?: StringNullableFilter<"WorkoutExercise"> | string | null
    rest?: StringNullableFilter<"WorkoutExercise"> | string | null
    order?: IntFilter<"WorkoutExercise"> | number
    workoutPlan?: XOR<WorkoutPlanScalarRelationFilter, WorkoutPlanWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type WorkoutExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    workoutPlanId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    load?: SortOrderInput | SortOrder
    rest?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: WorkoutExerciseCountOrderByAggregateInput
    _avg?: WorkoutExerciseAvgOrderByAggregateInput
    _max?: WorkoutExerciseMaxOrderByAggregateInput
    _min?: WorkoutExerciseMinOrderByAggregateInput
    _sum?: WorkoutExerciseSumOrderByAggregateInput
  }

  export type WorkoutExerciseScalarWhereWithAggregatesInput = {
    AND?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    OR?: WorkoutExerciseScalarWhereWithAggregatesInput[]
    NOT?: WorkoutExerciseScalarWhereWithAggregatesInput | WorkoutExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    workoutPlanId?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    exerciseId?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    sets?: IntWithAggregatesFilter<"WorkoutExercise"> | number
    reps?: StringWithAggregatesFilter<"WorkoutExercise"> | string
    load?: StringNullableWithAggregatesFilter<"WorkoutExercise"> | string | null
    rest?: StringNullableWithAggregatesFilter<"WorkoutExercise"> | string | null
    order?: IntWithAggregatesFilter<"WorkoutExercise"> | number
  }

  export type BodyRecordWhereInput = {
    AND?: BodyRecordWhereInput | BodyRecordWhereInput[]
    OR?: BodyRecordWhereInput[]
    NOT?: BodyRecordWhereInput | BodyRecordWhereInput[]
    id?: StringFilter<"BodyRecord"> | string
    studentId?: StringFilter<"BodyRecord"> | string
    weight?: DecimalNullableFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    height?: DecimalNullableFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    bodyFat?: DecimalNullableFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"BodyRecord"> | string | null
    recordedAt?: DateTimeFilter<"BodyRecord"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type BodyRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    bodyFat?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type BodyRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BodyRecordWhereInput | BodyRecordWhereInput[]
    OR?: BodyRecordWhereInput[]
    NOT?: BodyRecordWhereInput | BodyRecordWhereInput[]
    studentId?: StringFilter<"BodyRecord"> | string
    weight?: DecimalNullableFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    height?: DecimalNullableFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    bodyFat?: DecimalNullableFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"BodyRecord"> | string | null
    recordedAt?: DateTimeFilter<"BodyRecord"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type BodyRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    bodyFat?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    _count?: BodyRecordCountOrderByAggregateInput
    _avg?: BodyRecordAvgOrderByAggregateInput
    _max?: BodyRecordMaxOrderByAggregateInput
    _min?: BodyRecordMinOrderByAggregateInput
    _sum?: BodyRecordSumOrderByAggregateInput
  }

  export type BodyRecordScalarWhereWithAggregatesInput = {
    AND?: BodyRecordScalarWhereWithAggregatesInput | BodyRecordScalarWhereWithAggregatesInput[]
    OR?: BodyRecordScalarWhereWithAggregatesInput[]
    NOT?: BodyRecordScalarWhereWithAggregatesInput | BodyRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BodyRecord"> | string
    studentId?: StringWithAggregatesFilter<"BodyRecord"> | string
    weight?: DecimalNullableWithAggregatesFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    height?: DecimalNullableWithAggregatesFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    bodyFat?: DecimalNullableWithAggregatesFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableWithAggregatesFilter<"BodyRecord"> | string | null
    recordedAt?: DateTimeWithAggregatesFilter<"BodyRecord"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    payments?: PaymentCreateNestedManyWithoutStudentInput
    bodyRecords?: BodyRecordCreateNestedManyWithoutStudentInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    userId: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    bodyRecords?: BodyRecordUncheckedCreateNestedManyWithoutStudentInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    payments?: PaymentUpdateManyWithoutStudentNestedInput
    bodyRecords?: BodyRecordUpdateManyWithoutStudentNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    bodyRecords?: BodyRecordUncheckedUpdateManyWithoutStudentNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    userId: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paidAt?: Date | string | null
    status?: $Enums.PaymentStatus
    note?: string | null
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    studentId: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paidAt?: Date | string | null
    status?: $Enums.PaymentStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    studentId: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paidAt?: Date | string | null
    status?: $Enums.PaymentStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutPlanCreateInput = {
    id?: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutWorkoutPlansInput
    createdBy: UserCreateNestedOneWithoutWorkoutPlansInput
    exercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutPlanInput
  }

  export type WorkoutPlanUncheckedCreateInput = {
    id?: string
    studentId: string
    createdById: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutPlanInput
  }

  export type WorkoutPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutWorkoutPlansNestedInput
    createdBy?: UserUpdateOneRequiredWithoutWorkoutPlansNestedInput
    exercises?: WorkoutExerciseUpdateManyWithoutWorkoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutPlanNestedInput
  }

  export type WorkoutPlanCreateManyInput = {
    id?: string
    studentId: string
    createdById: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateInput = {
    id?: string
    name: string
    muscleGroup: string
    description?: string | null
    gifUrl?: string | null
    createdAt?: Date | string
    workoutItems?: WorkoutExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    name: string
    muscleGroup: string
    description?: string | null
    gifUrl?: string | null
    createdAt?: Date | string
    workoutItems?: WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutItems?: WorkoutExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutItems?: WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    name: string
    muscleGroup: string
    description?: string | null
    gifUrl?: string | null
    createdAt?: Date | string
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateInput = {
    id?: string
    sets: number
    reps: string
    load?: string | null
    rest?: string | null
    order: number
    workoutPlan: WorkoutPlanCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutItemsInput
  }

  export type WorkoutExerciseUncheckedCreateInput = {
    id?: string
    workoutPlanId: string
    exerciseId: string
    sets: number
    reps: string
    load?: string | null
    rest?: string | null
    order: number
  }

  export type WorkoutExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    load?: NullableStringFieldUpdateOperationsInput | string | null
    rest?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    workoutPlan?: WorkoutPlanUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutItemsNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutPlanId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    load?: NullableStringFieldUpdateOperationsInput | string | null
    rest?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExerciseCreateManyInput = {
    id?: string
    workoutPlanId: string
    exerciseId: string
    sets: number
    reps: string
    load?: string | null
    rest?: string | null
    order: number
  }

  export type WorkoutExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    load?: NullableStringFieldUpdateOperationsInput | string | null
    rest?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutPlanId?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    load?: NullableStringFieldUpdateOperationsInput | string | null
    rest?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type BodyRecordCreateInput = {
    id?: string
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bodyFat?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    recordedAt?: Date | string
    student: StudentCreateNestedOneWithoutBodyRecordsInput
  }

  export type BodyRecordUncheckedCreateInput = {
    id?: string
    studentId: string
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bodyFat?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    recordedAt?: Date | string
  }

  export type BodyRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bodyFat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutBodyRecordsNestedInput
  }

  export type BodyRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bodyFat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyRecordCreateManyInput = {
    id?: string
    studentId: string
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bodyFat?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    recordedAt?: Date | string
  }

  export type BodyRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bodyFat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bodyFat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type WorkoutPlanListRelationFilter = {
    every?: WorkoutPlanWhereInput
    some?: WorkoutPlanWhereInput
    none?: WorkoutPlanWhereInput
  }

  export type WorkoutPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type EnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type BodyRecordListRelationFilter = {
    every?: BodyRecordWhereInput
    some?: BodyRecordWhereInput
    none?: BodyRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BodyRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    goal?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    goal?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    goal?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type EnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    paidAt?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    paidAt?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    paidAt?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkoutExerciseListRelationFilter = {
    every?: WorkoutExerciseWhereInput
    some?: WorkoutExerciseWhereInput
    none?: WorkoutExerciseWhereInput
  }

  export type WorkoutExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutPlanCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdById?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdById?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutPlanMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdById?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    description?: SortOrder
    gifUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    description?: SortOrder
    gifUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    description?: SortOrder
    gifUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WorkoutPlanScalarRelationFilter = {
    is?: WorkoutPlanWhereInput
    isNot?: WorkoutPlanWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type WorkoutExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    workoutPlanId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    load?: SortOrder
    rest?: SortOrder
    order?: SortOrder
  }

  export type WorkoutExerciseAvgOrderByAggregateInput = {
    sets?: SortOrder
    order?: SortOrder
  }

  export type WorkoutExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutPlanId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    load?: SortOrder
    rest?: SortOrder
    order?: SortOrder
  }

  export type WorkoutExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    workoutPlanId?: SortOrder
    exerciseId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    load?: SortOrder
    rest?: SortOrder
    order?: SortOrder
  }

  export type WorkoutExerciseSumOrderByAggregateInput = {
    sets?: SortOrder
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BodyRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bodyFat?: SortOrder
    notes?: SortOrder
    recordedAt?: SortOrder
  }

  export type BodyRecordAvgOrderByAggregateInput = {
    weight?: SortOrder
    height?: SortOrder
    bodyFat?: SortOrder
  }

  export type BodyRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bodyFat?: SortOrder
    notes?: SortOrder
    recordedAt?: SortOrder
  }

  export type BodyRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bodyFat?: SortOrder
    notes?: SortOrder
    recordedAt?: SortOrder
  }

  export type BodyRecordSumOrderByAggregateInput = {
    weight?: SortOrder
    height?: SortOrder
    bodyFat?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type WorkoutPlanCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<WorkoutPlanCreateWithoutCreatedByInput, WorkoutPlanUncheckedCreateWithoutCreatedByInput> | WorkoutPlanCreateWithoutCreatedByInput[] | WorkoutPlanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutCreatedByInput | WorkoutPlanCreateOrConnectWithoutCreatedByInput[]
    createMany?: WorkoutPlanCreateManyCreatedByInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type WorkoutPlanUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<WorkoutPlanCreateWithoutCreatedByInput, WorkoutPlanUncheckedCreateWithoutCreatedByInput> | WorkoutPlanCreateWithoutCreatedByInput[] | WorkoutPlanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutCreatedByInput | WorkoutPlanCreateOrConnectWithoutCreatedByInput[]
    createMany?: WorkoutPlanCreateManyCreatedByInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutPlanUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutCreatedByInput, WorkoutPlanUncheckedCreateWithoutCreatedByInput> | WorkoutPlanCreateWithoutCreatedByInput[] | WorkoutPlanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutCreatedByInput | WorkoutPlanCreateOrConnectWithoutCreatedByInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutCreatedByInput | WorkoutPlanUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: WorkoutPlanCreateManyCreatedByInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutCreatedByInput | WorkoutPlanUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutCreatedByInput | WorkoutPlanUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutCreatedByInput, WorkoutPlanUncheckedCreateWithoutCreatedByInput> | WorkoutPlanCreateWithoutCreatedByInput[] | WorkoutPlanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutCreatedByInput | WorkoutPlanCreateOrConnectWithoutCreatedByInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutCreatedByInput | WorkoutPlanUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: WorkoutPlanCreateManyCreatedByInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutCreatedByInput | WorkoutPlanUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutCreatedByInput | WorkoutPlanUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutStudentInput = {
    create?: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput> | PaymentCreateWithoutStudentInput[] | PaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStudentInput | PaymentCreateOrConnectWithoutStudentInput[]
    createMany?: PaymentCreateManyStudentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BodyRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<BodyRecordCreateWithoutStudentInput, BodyRecordUncheckedCreateWithoutStudentInput> | BodyRecordCreateWithoutStudentInput[] | BodyRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BodyRecordCreateOrConnectWithoutStudentInput | BodyRecordCreateOrConnectWithoutStudentInput[]
    createMany?: BodyRecordCreateManyStudentInputEnvelope
    connect?: BodyRecordWhereUniqueInput | BodyRecordWhereUniqueInput[]
  }

  export type WorkoutPlanCreateNestedManyWithoutStudentInput = {
    create?: XOR<WorkoutPlanCreateWithoutStudentInput, WorkoutPlanUncheckedCreateWithoutStudentInput> | WorkoutPlanCreateWithoutStudentInput[] | WorkoutPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutStudentInput | WorkoutPlanCreateOrConnectWithoutStudentInput[]
    createMany?: WorkoutPlanCreateManyStudentInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput> | PaymentCreateWithoutStudentInput[] | PaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStudentInput | PaymentCreateOrConnectWithoutStudentInput[]
    createMany?: PaymentCreateManyStudentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BodyRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<BodyRecordCreateWithoutStudentInput, BodyRecordUncheckedCreateWithoutStudentInput> | BodyRecordCreateWithoutStudentInput[] | BodyRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BodyRecordCreateOrConnectWithoutStudentInput | BodyRecordCreateOrConnectWithoutStudentInput[]
    createMany?: BodyRecordCreateManyStudentInputEnvelope
    connect?: BodyRecordWhereUniqueInput | BodyRecordWhereUniqueInput[]
  }

  export type WorkoutPlanUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<WorkoutPlanCreateWithoutStudentInput, WorkoutPlanUncheckedCreateWithoutStudentInput> | WorkoutPlanCreateWithoutStudentInput[] | WorkoutPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutStudentInput | WorkoutPlanCreateOrConnectWithoutStudentInput[]
    createMany?: WorkoutPlanCreateManyStudentInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type EnumStudentStatusFieldUpdateOperationsInput = {
    set?: $Enums.StudentStatus
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type PaymentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput> | PaymentCreateWithoutStudentInput[] | PaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStudentInput | PaymentCreateOrConnectWithoutStudentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutStudentInput | PaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PaymentCreateManyStudentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutStudentInput | PaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutStudentInput | PaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BodyRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<BodyRecordCreateWithoutStudentInput, BodyRecordUncheckedCreateWithoutStudentInput> | BodyRecordCreateWithoutStudentInput[] | BodyRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BodyRecordCreateOrConnectWithoutStudentInput | BodyRecordCreateOrConnectWithoutStudentInput[]
    upsert?: BodyRecordUpsertWithWhereUniqueWithoutStudentInput | BodyRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: BodyRecordCreateManyStudentInputEnvelope
    set?: BodyRecordWhereUniqueInput | BodyRecordWhereUniqueInput[]
    disconnect?: BodyRecordWhereUniqueInput | BodyRecordWhereUniqueInput[]
    delete?: BodyRecordWhereUniqueInput | BodyRecordWhereUniqueInput[]
    connect?: BodyRecordWhereUniqueInput | BodyRecordWhereUniqueInput[]
    update?: BodyRecordUpdateWithWhereUniqueWithoutStudentInput | BodyRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: BodyRecordUpdateManyWithWhereWithoutStudentInput | BodyRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: BodyRecordScalarWhereInput | BodyRecordScalarWhereInput[]
  }

  export type WorkoutPlanUpdateManyWithoutStudentNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutStudentInput, WorkoutPlanUncheckedCreateWithoutStudentInput> | WorkoutPlanCreateWithoutStudentInput[] | WorkoutPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutStudentInput | WorkoutPlanCreateOrConnectWithoutStudentInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutStudentInput | WorkoutPlanUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: WorkoutPlanCreateManyStudentInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutStudentInput | WorkoutPlanUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutStudentInput | WorkoutPlanUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput> | PaymentCreateWithoutStudentInput[] | PaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStudentInput | PaymentCreateOrConnectWithoutStudentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutStudentInput | PaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PaymentCreateManyStudentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutStudentInput | PaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutStudentInput | PaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BodyRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<BodyRecordCreateWithoutStudentInput, BodyRecordUncheckedCreateWithoutStudentInput> | BodyRecordCreateWithoutStudentInput[] | BodyRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: BodyRecordCreateOrConnectWithoutStudentInput | BodyRecordCreateOrConnectWithoutStudentInput[]
    upsert?: BodyRecordUpsertWithWhereUniqueWithoutStudentInput | BodyRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: BodyRecordCreateManyStudentInputEnvelope
    set?: BodyRecordWhereUniqueInput | BodyRecordWhereUniqueInput[]
    disconnect?: BodyRecordWhereUniqueInput | BodyRecordWhereUniqueInput[]
    delete?: BodyRecordWhereUniqueInput | BodyRecordWhereUniqueInput[]
    connect?: BodyRecordWhereUniqueInput | BodyRecordWhereUniqueInput[]
    update?: BodyRecordUpdateWithWhereUniqueWithoutStudentInput | BodyRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: BodyRecordUpdateManyWithWhereWithoutStudentInput | BodyRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: BodyRecordScalarWhereInput | BodyRecordScalarWhereInput[]
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutStudentInput, WorkoutPlanUncheckedCreateWithoutStudentInput> | WorkoutPlanCreateWithoutStudentInput[] | WorkoutPlanUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutStudentInput | WorkoutPlanCreateOrConnectWithoutStudentInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutStudentInput | WorkoutPlanUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: WorkoutPlanCreateManyStudentInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutStudentInput | WorkoutPlanUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutStudentInput | WorkoutPlanUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<StudentCreateWithoutPaymentsInput, StudentUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPaymentsInput
    connect?: StudentWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type StudentUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<StudentCreateWithoutPaymentsInput, StudentUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPaymentsInput
    upsert?: StudentUpsertWithoutPaymentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPaymentsInput, StudentUpdateWithoutPaymentsInput>, StudentUncheckedUpdateWithoutPaymentsInput>
  }

  export type StudentCreateNestedOneWithoutWorkoutPlansInput = {
    create?: XOR<StudentCreateWithoutWorkoutPlansInput, StudentUncheckedCreateWithoutWorkoutPlansInput>
    connectOrCreate?: StudentCreateOrConnectWithoutWorkoutPlansInput
    connect?: StudentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWorkoutPlansInput = {
    create?: XOR<UserCreateWithoutWorkoutPlansInput, UserUncheckedCreateWithoutWorkoutPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutPlansInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutExerciseCreateNestedManyWithoutWorkoutPlanInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutPlanInput, WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput> | WorkoutExerciseCreateWithoutWorkoutPlanInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutPlanInput | WorkoutExerciseCreateOrConnectWithoutWorkoutPlanInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutPlanInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutPlanInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutPlanInput, WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput> | WorkoutExerciseCreateWithoutWorkoutPlanInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutPlanInput | WorkoutExerciseCreateOrConnectWithoutWorkoutPlanInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutPlanInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentUpdateOneRequiredWithoutWorkoutPlansNestedInput = {
    create?: XOR<StudentCreateWithoutWorkoutPlansInput, StudentUncheckedCreateWithoutWorkoutPlansInput>
    connectOrCreate?: StudentCreateOrConnectWithoutWorkoutPlansInput
    upsert?: StudentUpsertWithoutWorkoutPlansInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutWorkoutPlansInput, StudentUpdateWithoutWorkoutPlansInput>, StudentUncheckedUpdateWithoutWorkoutPlansInput>
  }

  export type UserUpdateOneRequiredWithoutWorkoutPlansNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutPlansInput, UserUncheckedCreateWithoutWorkoutPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutPlansInput
    upsert?: UserUpsertWithoutWorkoutPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutPlansInput, UserUpdateWithoutWorkoutPlansInput>, UserUncheckedUpdateWithoutWorkoutPlansInput>
  }

  export type WorkoutExerciseUpdateManyWithoutWorkoutPlanNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutPlanInput, WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput> | WorkoutExerciseCreateWithoutWorkoutPlanInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutPlanInput | WorkoutExerciseCreateOrConnectWithoutWorkoutPlanInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutPlanInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutPlanInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutPlanInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutPlanInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutPlanInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutPlanInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutPlanInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutPlanNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutWorkoutPlanInput, WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput> | WorkoutExerciseCreateWithoutWorkoutPlanInput[] | WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutWorkoutPlanInput | WorkoutExerciseCreateOrConnectWithoutWorkoutPlanInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutPlanInput | WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutPlanInput[]
    createMany?: WorkoutExerciseCreateManyWorkoutPlanInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutPlanInput | WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutPlanInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutWorkoutPlanInput | WorkoutExerciseUpdateManyWithWhereWithoutWorkoutPlanInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
  }

  export type WorkoutExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput> | WorkoutExerciseCreateWithoutExerciseInput[] | WorkoutExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExerciseCreateOrConnectWithoutExerciseInput | WorkoutExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExerciseCreateManyExerciseInputEnvelope
    set?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    disconnect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    delete?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    connect?: WorkoutExerciseWhereUniqueInput | WorkoutExerciseWhereUniqueInput[]
    update?: WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput | WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
  }

  export type WorkoutPlanCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutPlanCreateWithoutExercisesInput, WorkoutPlanUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutExercisesInput
    connect?: WorkoutPlanWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutWorkoutItemsInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutItemsInput, ExerciseUncheckedCreateWithoutWorkoutItemsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutItemsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutPlanUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutExercisesInput, WorkoutPlanUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutPlanUpsertWithoutExercisesInput
    connect?: WorkoutPlanWhereUniqueInput
    update?: XOR<XOR<WorkoutPlanUpdateToOneWithWhereWithoutExercisesInput, WorkoutPlanUpdateWithoutExercisesInput>, WorkoutPlanUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutWorkoutItemsNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutItemsInput, ExerciseUncheckedCreateWithoutWorkoutItemsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutItemsInput
    upsert?: ExerciseUpsertWithoutWorkoutItemsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutWorkoutItemsInput, ExerciseUpdateWithoutWorkoutItemsInput>, ExerciseUncheckedUpdateWithoutWorkoutItemsInput>
  }

  export type StudentCreateNestedOneWithoutBodyRecordsInput = {
    create?: XOR<StudentCreateWithoutBodyRecordsInput, StudentUncheckedCreateWithoutBodyRecordsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutBodyRecordsInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StudentUpdateOneRequiredWithoutBodyRecordsNestedInput = {
    create?: XOR<StudentCreateWithoutBodyRecordsInput, StudentUncheckedCreateWithoutBodyRecordsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutBodyRecordsInput
    upsert?: StudentUpsertWithoutBodyRecordsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutBodyRecordsInput, StudentUpdateWithoutBodyRecordsInput>, StudentUncheckedUpdateWithoutBodyRecordsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedEnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutStudentInput
    bodyRecords?: BodyRecordCreateNestedManyWithoutStudentInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    bodyRecords?: BodyRecordUncheckedCreateNestedManyWithoutStudentInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type WorkoutPlanCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutWorkoutPlansInput
    exercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutPlanInput
  }

  export type WorkoutPlanUncheckedCreateWithoutCreatedByInput = {
    id?: string
    studentId: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutPlanInput
  }

  export type WorkoutPlanCreateOrConnectWithoutCreatedByInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutCreatedByInput, WorkoutPlanUncheckedCreateWithoutCreatedByInput>
  }

  export type WorkoutPlanCreateManyCreatedByInputEnvelope = {
    data: WorkoutPlanCreateManyCreatedByInput | WorkoutPlanCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutStudentNestedInput
    bodyRecords?: BodyRecordUpdateManyWithoutStudentNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    bodyRecords?: BodyRecordUncheckedUpdateManyWithoutStudentNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type WorkoutPlanUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: WorkoutPlanWhereUniqueInput
    update: XOR<WorkoutPlanUpdateWithoutCreatedByInput, WorkoutPlanUncheckedUpdateWithoutCreatedByInput>
    create: XOR<WorkoutPlanCreateWithoutCreatedByInput, WorkoutPlanUncheckedCreateWithoutCreatedByInput>
  }

  export type WorkoutPlanUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: WorkoutPlanWhereUniqueInput
    data: XOR<WorkoutPlanUpdateWithoutCreatedByInput, WorkoutPlanUncheckedUpdateWithoutCreatedByInput>
  }

  export type WorkoutPlanUpdateManyWithWhereWithoutCreatedByInput = {
    where: WorkoutPlanScalarWhereInput
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type WorkoutPlanScalarWhereInput = {
    AND?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
    OR?: WorkoutPlanScalarWhereInput[]
    NOT?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
    id?: StringFilter<"WorkoutPlan"> | string
    studentId?: StringFilter<"WorkoutPlan"> | string
    createdById?: StringFilter<"WorkoutPlan"> | string
    name?: StringFilter<"WorkoutPlan"> | string
    description?: StringNullableFilter<"WorkoutPlan"> | string | null
    active?: BoolFilter<"WorkoutPlan"> | boolean
    createdAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type PaymentCreateWithoutStudentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paidAt?: Date | string | null
    status?: $Enums.PaymentStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutStudentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paidAt?: Date | string | null
    status?: $Enums.PaymentStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutStudentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput>
  }

  export type PaymentCreateManyStudentInputEnvelope = {
    data: PaymentCreateManyStudentInput | PaymentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type BodyRecordCreateWithoutStudentInput = {
    id?: string
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bodyFat?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    recordedAt?: Date | string
  }

  export type BodyRecordUncheckedCreateWithoutStudentInput = {
    id?: string
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bodyFat?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    recordedAt?: Date | string
  }

  export type BodyRecordCreateOrConnectWithoutStudentInput = {
    where: BodyRecordWhereUniqueInput
    create: XOR<BodyRecordCreateWithoutStudentInput, BodyRecordUncheckedCreateWithoutStudentInput>
  }

  export type BodyRecordCreateManyStudentInputEnvelope = {
    data: BodyRecordCreateManyStudentInput | BodyRecordCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutPlanCreateWithoutStudentInput = {
    id?: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutWorkoutPlansInput
    exercises?: WorkoutExerciseCreateNestedManyWithoutWorkoutPlanInput
  }

  export type WorkoutPlanUncheckedCreateWithoutStudentInput = {
    id?: string
    createdById: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: WorkoutExerciseUncheckedCreateNestedManyWithoutWorkoutPlanInput
  }

  export type WorkoutPlanCreateOrConnectWithoutStudentInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutStudentInput, WorkoutPlanUncheckedCreateWithoutStudentInput>
  }

  export type WorkoutPlanCreateManyStudentInputEnvelope = {
    data: WorkoutPlanCreateManyStudentInput | WorkoutPlanCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutPlans?: WorkoutPlanUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutStudentInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutStudentInput, PaymentUncheckedUpdateWithoutStudentInput>
    create: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutStudentInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutStudentInput, PaymentUncheckedUpdateWithoutStudentInput>
  }

  export type PaymentUpdateManyWithWhereWithoutStudentInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutStudentInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    studentId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    note?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type BodyRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: BodyRecordWhereUniqueInput
    update: XOR<BodyRecordUpdateWithoutStudentInput, BodyRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<BodyRecordCreateWithoutStudentInput, BodyRecordUncheckedCreateWithoutStudentInput>
  }

  export type BodyRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: BodyRecordWhereUniqueInput
    data: XOR<BodyRecordUpdateWithoutStudentInput, BodyRecordUncheckedUpdateWithoutStudentInput>
  }

  export type BodyRecordUpdateManyWithWhereWithoutStudentInput = {
    where: BodyRecordScalarWhereInput
    data: XOR<BodyRecordUpdateManyMutationInput, BodyRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type BodyRecordScalarWhereInput = {
    AND?: BodyRecordScalarWhereInput | BodyRecordScalarWhereInput[]
    OR?: BodyRecordScalarWhereInput[]
    NOT?: BodyRecordScalarWhereInput | BodyRecordScalarWhereInput[]
    id?: StringFilter<"BodyRecord"> | string
    studentId?: StringFilter<"BodyRecord"> | string
    weight?: DecimalNullableFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    height?: DecimalNullableFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    bodyFat?: DecimalNullableFilter<"BodyRecord"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"BodyRecord"> | string | null
    recordedAt?: DateTimeFilter<"BodyRecord"> | Date | string
  }

  export type WorkoutPlanUpsertWithWhereUniqueWithoutStudentInput = {
    where: WorkoutPlanWhereUniqueInput
    update: XOR<WorkoutPlanUpdateWithoutStudentInput, WorkoutPlanUncheckedUpdateWithoutStudentInput>
    create: XOR<WorkoutPlanCreateWithoutStudentInput, WorkoutPlanUncheckedCreateWithoutStudentInput>
  }

  export type WorkoutPlanUpdateWithWhereUniqueWithoutStudentInput = {
    where: WorkoutPlanWhereUniqueInput
    data: XOR<WorkoutPlanUpdateWithoutStudentInput, WorkoutPlanUncheckedUpdateWithoutStudentInput>
  }

  export type WorkoutPlanUpdateManyWithWhereWithoutStudentInput = {
    where: WorkoutPlanScalarWhereInput
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentCreateWithoutPaymentsInput = {
    id?: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    bodyRecords?: BodyRecordCreateNestedManyWithoutStudentInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bodyRecords?: BodyRecordUncheckedCreateNestedManyWithoutStudentInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutPaymentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPaymentsInput, StudentUncheckedCreateWithoutPaymentsInput>
  }

  export type StudentUpsertWithoutPaymentsInput = {
    update: XOR<StudentUpdateWithoutPaymentsInput, StudentUncheckedUpdateWithoutPaymentsInput>
    create: XOR<StudentCreateWithoutPaymentsInput, StudentUncheckedCreateWithoutPaymentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPaymentsInput, StudentUncheckedUpdateWithoutPaymentsInput>
  }

  export type StudentUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    bodyRecords?: BodyRecordUpdateManyWithoutStudentNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bodyRecords?: BodyRecordUncheckedUpdateManyWithoutStudentNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutWorkoutPlansInput = {
    id?: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    payments?: PaymentCreateNestedManyWithoutStudentInput
    bodyRecords?: BodyRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutWorkoutPlansInput = {
    id?: string
    userId: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    bodyRecords?: BodyRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutWorkoutPlansInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutWorkoutPlansInput, StudentUncheckedCreateWithoutWorkoutPlansInput>
  }

  export type UserCreateWithoutWorkoutPlansInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutPlansInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutPlansInput, UserUncheckedCreateWithoutWorkoutPlansInput>
  }

  export type WorkoutExerciseCreateWithoutWorkoutPlanInput = {
    id?: string
    sets: number
    reps: string
    load?: string | null
    rest?: string | null
    order: number
    exercise: ExerciseCreateNestedOneWithoutWorkoutItemsInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput = {
    id?: string
    exerciseId: string
    sets: number
    reps: string
    load?: string | null
    rest?: string | null
    order: number
  }

  export type WorkoutExerciseCreateOrConnectWithoutWorkoutPlanInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutWorkoutPlanInput, WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput>
  }

  export type WorkoutExerciseCreateManyWorkoutPlanInputEnvelope = {
    data: WorkoutExerciseCreateManyWorkoutPlanInput | WorkoutExerciseCreateManyWorkoutPlanInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutWorkoutPlansInput = {
    update: XOR<StudentUpdateWithoutWorkoutPlansInput, StudentUncheckedUpdateWithoutWorkoutPlansInput>
    create: XOR<StudentCreateWithoutWorkoutPlansInput, StudentUncheckedCreateWithoutWorkoutPlansInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutWorkoutPlansInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutWorkoutPlansInput, StudentUncheckedUpdateWithoutWorkoutPlansInput>
  }

  export type StudentUpdateWithoutWorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    payments?: PaymentUpdateManyWithoutStudentNestedInput
    bodyRecords?: BodyRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutWorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    bodyRecords?: BodyRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUpsertWithoutWorkoutPlansInput = {
    update: XOR<UserUpdateWithoutWorkoutPlansInput, UserUncheckedUpdateWithoutWorkoutPlansInput>
    create: XOR<UserCreateWithoutWorkoutPlansInput, UserUncheckedCreateWithoutWorkoutPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutPlansInput, UserUncheckedUpdateWithoutWorkoutPlansInput>
  }

  export type UserUpdateWithoutWorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutWorkoutPlanInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutWorkoutPlanInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutPlanInput>
    create: XOR<WorkoutExerciseCreateWithoutWorkoutPlanInput, WorkoutExerciseUncheckedCreateWithoutWorkoutPlanInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutWorkoutPlanInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutWorkoutPlanInput, WorkoutExerciseUncheckedUpdateWithoutWorkoutPlanInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutWorkoutPlanInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutWorkoutPlanInput>
  }

  export type WorkoutExerciseScalarWhereInput = {
    AND?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    OR?: WorkoutExerciseScalarWhereInput[]
    NOT?: WorkoutExerciseScalarWhereInput | WorkoutExerciseScalarWhereInput[]
    id?: StringFilter<"WorkoutExercise"> | string
    workoutPlanId?: StringFilter<"WorkoutExercise"> | string
    exerciseId?: StringFilter<"WorkoutExercise"> | string
    sets?: IntFilter<"WorkoutExercise"> | number
    reps?: StringFilter<"WorkoutExercise"> | string
    load?: StringNullableFilter<"WorkoutExercise"> | string | null
    rest?: StringNullableFilter<"WorkoutExercise"> | string | null
    order?: IntFilter<"WorkoutExercise"> | number
  }

  export type WorkoutExerciseCreateWithoutExerciseInput = {
    id?: string
    sets: number
    reps: string
    load?: string | null
    rest?: string | null
    order: number
    workoutPlan: WorkoutPlanCreateNestedOneWithoutExercisesInput
  }

  export type WorkoutExerciseUncheckedCreateWithoutExerciseInput = {
    id?: string
    workoutPlanId: string
    sets: number
    reps: string
    load?: string | null
    rest?: string | null
    order: number
  }

  export type WorkoutExerciseCreateOrConnectWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseCreateManyExerciseInputEnvelope = {
    data: WorkoutExerciseCreateManyExerciseInput | WorkoutExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    update: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<WorkoutExerciseCreateWithoutExerciseInput, WorkoutExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExerciseWhereUniqueInput
    data: XOR<WorkoutExerciseUpdateWithoutExerciseInput, WorkoutExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type WorkoutExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: WorkoutExerciseScalarWhereInput
    data: XOR<WorkoutExerciseUpdateManyMutationInput, WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type WorkoutPlanCreateWithoutExercisesInput = {
    id?: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutWorkoutPlansInput
    createdBy: UserCreateNestedOneWithoutWorkoutPlansInput
  }

  export type WorkoutPlanUncheckedCreateWithoutExercisesInput = {
    id?: string
    studentId: string
    createdById: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutPlanCreateOrConnectWithoutExercisesInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutExercisesInput, WorkoutPlanUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseCreateWithoutWorkoutItemsInput = {
    id?: string
    name: string
    muscleGroup: string
    description?: string | null
    gifUrl?: string | null
    createdAt?: Date | string
  }

  export type ExerciseUncheckedCreateWithoutWorkoutItemsInput = {
    id?: string
    name: string
    muscleGroup: string
    description?: string | null
    gifUrl?: string | null
    createdAt?: Date | string
  }

  export type ExerciseCreateOrConnectWithoutWorkoutItemsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutItemsInput, ExerciseUncheckedCreateWithoutWorkoutItemsInput>
  }

  export type WorkoutPlanUpsertWithoutExercisesInput = {
    update: XOR<WorkoutPlanUpdateWithoutExercisesInput, WorkoutPlanUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutPlanCreateWithoutExercisesInput, WorkoutPlanUncheckedCreateWithoutExercisesInput>
    where?: WorkoutPlanWhereInput
  }

  export type WorkoutPlanUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutPlanWhereInput
    data: XOR<WorkoutPlanUpdateWithoutExercisesInput, WorkoutPlanUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutPlanUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutWorkoutPlansNestedInput
    createdBy?: UserUpdateOneRequiredWithoutWorkoutPlansNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUpsertWithoutWorkoutItemsInput = {
    update: XOR<ExerciseUpdateWithoutWorkoutItemsInput, ExerciseUncheckedUpdateWithoutWorkoutItemsInput>
    create: XOR<ExerciseCreateWithoutWorkoutItemsInput, ExerciseUncheckedCreateWithoutWorkoutItemsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutWorkoutItemsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutWorkoutItemsInput, ExerciseUncheckedUpdateWithoutWorkoutItemsInput>
  }

  export type ExerciseUpdateWithoutWorkoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gifUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateWithoutBodyRecordsInput = {
    id?: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    payments?: PaymentCreateNestedManyWithoutStudentInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutBodyRecordsInput = {
    id?: string
    userId: string
    phone?: string | null
    birthDate?: Date | string | null
    goal?: string | null
    plan?: $Enums.PlanType
    status?: $Enums.StudentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutBodyRecordsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutBodyRecordsInput, StudentUncheckedCreateWithoutBodyRecordsInput>
  }

  export type StudentUpsertWithoutBodyRecordsInput = {
    update: XOR<StudentUpdateWithoutBodyRecordsInput, StudentUncheckedUpdateWithoutBodyRecordsInput>
    create: XOR<StudentCreateWithoutBodyRecordsInput, StudentUncheckedCreateWithoutBodyRecordsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutBodyRecordsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutBodyRecordsInput, StudentUncheckedUpdateWithoutBodyRecordsInput>
  }

  export type StudentUpdateWithoutBodyRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    payments?: PaymentUpdateManyWithoutStudentNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutBodyRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type WorkoutPlanCreateManyCreatedByInput = {
    id?: string
    studentId: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutPlanUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutWorkoutPlansNestedInput
    exercises?: WorkoutExerciseUpdateManyWithoutWorkoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyStudentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    paidAt?: Date | string | null
    status?: $Enums.PaymentStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type BodyRecordCreateManyStudentInput = {
    id?: string
    weight?: Decimal | DecimalJsLike | number | string | null
    height?: Decimal | DecimalJsLike | number | string | null
    bodyFat?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    recordedAt?: Date | string
  }

  export type WorkoutPlanCreateManyStudentInput = {
    id?: string
    createdById: string
    name: string
    description?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyRecordUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bodyFat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyRecordUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bodyFat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bodyFat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutPlanUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutWorkoutPlansNestedInput
    exercises?: WorkoutExerciseUpdateManyWithoutWorkoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: WorkoutExerciseUncheckedUpdateManyWithoutWorkoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExerciseCreateManyWorkoutPlanInput = {
    id?: string
    exerciseId: string
    sets: number
    reps: string
    load?: string | null
    rest?: string | null
    order: number
  }

  export type WorkoutExerciseUpdateWithoutWorkoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    load?: NullableStringFieldUpdateOperationsInput | string | null
    rest?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutItemsNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutWorkoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    load?: NullableStringFieldUpdateOperationsInput | string | null
    rest?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutWorkoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    load?: NullableStringFieldUpdateOperationsInput | string | null
    rest?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExerciseCreateManyExerciseInput = {
    id?: string
    workoutPlanId: string
    sets: number
    reps: string
    load?: string | null
    rest?: string | null
    order: number
  }

  export type WorkoutExerciseUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    load?: NullableStringFieldUpdateOperationsInput | string | null
    rest?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    workoutPlan?: WorkoutPlanUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type WorkoutExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutPlanId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    load?: NullableStringFieldUpdateOperationsInput | string | null
    rest?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutPlanId?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: StringFieldUpdateOperationsInput | string
    load?: NullableStringFieldUpdateOperationsInput | string | null
    rest?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}