
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model ONG
 * 
 */
export type ONG = $Result.DefaultSelection<Prisma.$ONGPayload>
/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oNG`: Exposes CRUD operations for the **ONG** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ONGS
    * const oNGS = await prisma.oNG.findMany()
    * ```
    */
  get oNG(): Prisma.ONGDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Usuario: 'Usuario',
    ONG: 'ONG',
    Empresa: 'Empresa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "oNG" | "empresa"
      txIsolationLevel: never
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UsuarioFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UsuarioAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      ONG: {
        payload: Prisma.$ONGPayload<ExtArgs>
        fields: Prisma.ONGFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ONGFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ONGPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ONGFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ONGPayload>
          }
          findFirst: {
            args: Prisma.ONGFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ONGPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ONGFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ONGPayload>
          }
          findMany: {
            args: Prisma.ONGFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ONGPayload>[]
          }
          create: {
            args: Prisma.ONGCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ONGPayload>
          }
          createMany: {
            args: Prisma.ONGCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ONGDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ONGPayload>
          }
          update: {
            args: Prisma.ONGUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ONGPayload>
          }
          deleteMany: {
            args: Prisma.ONGDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ONGUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ONGUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ONGPayload>
          }
          aggregate: {
            args: Prisma.ONGAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateONG>
          }
          groupBy: {
            args: Prisma.ONGGroupByArgs<ExtArgs>
            result: $Utils.Optional<ONGGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ONGFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ONGAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ONGCountArgs<ExtArgs>
            result: $Utils.Optional<ONGCountAggregateOutputType> | number
          }
        }
      }
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EmpresaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EmpresaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
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
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    oNG?: ONGOmit
    empresa?: EmpresaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
    ongId: string | null
    empresaId: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
    ongId: string | null
    empresaId: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    ongId: number
    empresaId: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    ongId?: true
    empresaId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    ongId?: true
    empresaId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    ongId?: true
    empresaId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    password: string
    role: string
    ongId: string | null
    empresaId: string | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    ongId?: boolean
    empresaId?: boolean
    ong?: boolean | Usuario$ongArgs<ExtArgs>
    empresa?: boolean | Usuario$empresaArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    ongId?: boolean
    empresaId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "ongId" | "empresaId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ong?: boolean | Usuario$ongArgs<ExtArgs>
    empresa?: boolean | Usuario$empresaArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      ong: Prisma.$ONGPayload<ExtArgs> | null
      empresa: Prisma.$EmpresaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: string
      ongId: string | null
      empresaId: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * @param {UsuarioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const usuario = await prisma.usuario.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UsuarioFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Usuario.
     * @param {UsuarioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const usuario = await prisma.usuario.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UsuarioAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ong<T extends Usuario$ongArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ongArgs<ExtArgs>>): Prisma__ONGClient<$Result.GetResult<Prisma.$ONGPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    empresa<T extends Usuario$empresaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$empresaArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'String'>
    readonly ongId: FieldRef<"Usuario", 'String'>
    readonly empresaId: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario findRaw
   */
  export type UsuarioFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Usuario aggregateRaw
   */
  export type UsuarioAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Usuario.ong
   */
  export type Usuario$ongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
    where?: ONGWhereInput
  }

  /**
   * Usuario.empresa
   */
  export type Usuario$empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    where?: EmpresaWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model ONG
   */

  export type AggregateONG = {
    _count: ONGCountAggregateOutputType | null
    _avg: ONGAvgAggregateOutputType | null
    _sum: ONGSumAggregateOutputType | null
    _min: ONGMinAggregateOutputType | null
    _max: ONGMaxAggregateOutputType | null
  }

  export type ONGAvgAggregateOutputType = {
    anoFundacao: number | null
    numeroBeneficiarios: number | null
    numeroVoluntarios: number | null
  }

  export type ONGSumAggregateOutputType = {
    anoFundacao: number | null
    numeroBeneficiarios: number | null
    numeroVoluntarios: number | null
  }

  export type ONGMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    areaAtuacao: string | null
    anoFundacao: number | null
    missao: string | null
    principaisProjetos: string | null
    website: string | null
    telefone: string | null
    enderecoCompleto: string | null
    principaisNecessidades: string | null
    numeroBeneficiarios: number | null
    numeroVoluntarios: number | null
  }

  export type ONGMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    areaAtuacao: string | null
    anoFundacao: number | null
    missao: string | null
    principaisProjetos: string | null
    website: string | null
    telefone: string | null
    enderecoCompleto: string | null
    principaisNecessidades: string | null
    numeroBeneficiarios: number | null
    numeroVoluntarios: number | null
  }

  export type ONGCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    areaAtuacao: number
    anoFundacao: number
    missao: number
    principaisProjetos: number
    website: number
    telefone: number
    enderecoCompleto: number
    odsTrabalhados: number
    principaisNecessidades: number
    numeroBeneficiarios: number
    numeroVoluntarios: number
    _all: number
  }


  export type ONGAvgAggregateInputType = {
    anoFundacao?: true
    numeroBeneficiarios?: true
    numeroVoluntarios?: true
  }

  export type ONGSumAggregateInputType = {
    anoFundacao?: true
    numeroBeneficiarios?: true
    numeroVoluntarios?: true
  }

  export type ONGMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    areaAtuacao?: true
    anoFundacao?: true
    missao?: true
    principaisProjetos?: true
    website?: true
    telefone?: true
    enderecoCompleto?: true
    principaisNecessidades?: true
    numeroBeneficiarios?: true
    numeroVoluntarios?: true
  }

  export type ONGMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    areaAtuacao?: true
    anoFundacao?: true
    missao?: true
    principaisProjetos?: true
    website?: true
    telefone?: true
    enderecoCompleto?: true
    principaisNecessidades?: true
    numeroBeneficiarios?: true
    numeroVoluntarios?: true
  }

  export type ONGCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    areaAtuacao?: true
    anoFundacao?: true
    missao?: true
    principaisProjetos?: true
    website?: true
    telefone?: true
    enderecoCompleto?: true
    odsTrabalhados?: true
    principaisNecessidades?: true
    numeroBeneficiarios?: true
    numeroVoluntarios?: true
    _all?: true
  }

  export type ONGAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ONG to aggregate.
     */
    where?: ONGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ONGS to fetch.
     */
    orderBy?: ONGOrderByWithRelationInput | ONGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ONGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ONGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ONGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ONGS
    **/
    _count?: true | ONGCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ONGAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ONGSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ONGMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ONGMaxAggregateInputType
  }

  export type GetONGAggregateType<T extends ONGAggregateArgs> = {
        [P in keyof T & keyof AggregateONG]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateONG[P]>
      : GetScalarType<T[P], AggregateONG[P]>
  }




  export type ONGGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ONGWhereInput
    orderBy?: ONGOrderByWithAggregationInput | ONGOrderByWithAggregationInput[]
    by: ONGScalarFieldEnum[] | ONGScalarFieldEnum
    having?: ONGScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ONGCountAggregateInputType | true
    _avg?: ONGAvgAggregateInputType
    _sum?: ONGSumAggregateInputType
    _min?: ONGMinAggregateInputType
    _max?: ONGMaxAggregateInputType
  }

  export type ONGGroupByOutputType = {
    id: string
    nome: string
    cnpj: string
    areaAtuacao: string
    anoFundacao: number
    missao: string
    principaisProjetos: string
    website: string | null
    telefone: string
    enderecoCompleto: string
    odsTrabalhados: string[]
    principaisNecessidades: string
    numeroBeneficiarios: number | null
    numeroVoluntarios: number | null
    _count: ONGCountAggregateOutputType | null
    _avg: ONGAvgAggregateOutputType | null
    _sum: ONGSumAggregateOutputType | null
    _min: ONGMinAggregateOutputType | null
    _max: ONGMaxAggregateOutputType | null
  }

  type GetONGGroupByPayload<T extends ONGGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ONGGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ONGGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ONGGroupByOutputType[P]>
            : GetScalarType<T[P], ONGGroupByOutputType[P]>
        }
      >
    >


  export type ONGSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    areaAtuacao?: boolean
    anoFundacao?: boolean
    missao?: boolean
    principaisProjetos?: boolean
    website?: boolean
    telefone?: boolean
    enderecoCompleto?: boolean
    odsTrabalhados?: boolean
    principaisNecessidades?: boolean
    numeroBeneficiarios?: boolean
    numeroVoluntarios?: boolean
    usuario?: boolean | ONG$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["oNG"]>



  export type ONGSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    areaAtuacao?: boolean
    anoFundacao?: boolean
    missao?: boolean
    principaisProjetos?: boolean
    website?: boolean
    telefone?: boolean
    enderecoCompleto?: boolean
    odsTrabalhados?: boolean
    principaisNecessidades?: boolean
    numeroBeneficiarios?: boolean
    numeroVoluntarios?: boolean
  }

  export type ONGOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cnpj" | "areaAtuacao" | "anoFundacao" | "missao" | "principaisProjetos" | "website" | "telefone" | "enderecoCompleto" | "odsTrabalhados" | "principaisNecessidades" | "numeroBeneficiarios" | "numeroVoluntarios", ExtArgs["result"]["oNG"]>
  export type ONGInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | ONG$usuarioArgs<ExtArgs>
  }

  export type $ONGPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ONG"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cnpj: string
      areaAtuacao: string
      anoFundacao: number
      missao: string
      principaisProjetos: string
      website: string | null
      telefone: string
      enderecoCompleto: string
      odsTrabalhados: string[]
      principaisNecessidades: string
      numeroBeneficiarios: number | null
      numeroVoluntarios: number | null
    }, ExtArgs["result"]["oNG"]>
    composites: {}
  }

  type ONGGetPayload<S extends boolean | null | undefined | ONGDefaultArgs> = $Result.GetResult<Prisma.$ONGPayload, S>

  type ONGCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ONGFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ONGCountAggregateInputType | true
    }

  export interface ONGDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ONG'], meta: { name: 'ONG' } }
    /**
     * Find zero or one ONG that matches the filter.
     * @param {ONGFindUniqueArgs} args - Arguments to find a ONG
     * @example
     * // Get one ONG
     * const oNG = await prisma.oNG.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ONGFindUniqueArgs>(args: SelectSubset<T, ONGFindUniqueArgs<ExtArgs>>): Prisma__ONGClient<$Result.GetResult<Prisma.$ONGPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ONG that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ONGFindUniqueOrThrowArgs} args - Arguments to find a ONG
     * @example
     * // Get one ONG
     * const oNG = await prisma.oNG.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ONGFindUniqueOrThrowArgs>(args: SelectSubset<T, ONGFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ONGClient<$Result.GetResult<Prisma.$ONGPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ONG that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ONGFindFirstArgs} args - Arguments to find a ONG
     * @example
     * // Get one ONG
     * const oNG = await prisma.oNG.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ONGFindFirstArgs>(args?: SelectSubset<T, ONGFindFirstArgs<ExtArgs>>): Prisma__ONGClient<$Result.GetResult<Prisma.$ONGPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ONG that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ONGFindFirstOrThrowArgs} args - Arguments to find a ONG
     * @example
     * // Get one ONG
     * const oNG = await prisma.oNG.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ONGFindFirstOrThrowArgs>(args?: SelectSubset<T, ONGFindFirstOrThrowArgs<ExtArgs>>): Prisma__ONGClient<$Result.GetResult<Prisma.$ONGPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ONGS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ONGFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ONGS
     * const oNGS = await prisma.oNG.findMany()
     * 
     * // Get first 10 ONGS
     * const oNGS = await prisma.oNG.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oNGWithIdOnly = await prisma.oNG.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ONGFindManyArgs>(args?: SelectSubset<T, ONGFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ONGPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ONG.
     * @param {ONGCreateArgs} args - Arguments to create a ONG.
     * @example
     * // Create one ONG
     * const ONG = await prisma.oNG.create({
     *   data: {
     *     // ... data to create a ONG
     *   }
     * })
     * 
     */
    create<T extends ONGCreateArgs>(args: SelectSubset<T, ONGCreateArgs<ExtArgs>>): Prisma__ONGClient<$Result.GetResult<Prisma.$ONGPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ONGS.
     * @param {ONGCreateManyArgs} args - Arguments to create many ONGS.
     * @example
     * // Create many ONGS
     * const oNG = await prisma.oNG.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ONGCreateManyArgs>(args?: SelectSubset<T, ONGCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ONG.
     * @param {ONGDeleteArgs} args - Arguments to delete one ONG.
     * @example
     * // Delete one ONG
     * const ONG = await prisma.oNG.delete({
     *   where: {
     *     // ... filter to delete one ONG
     *   }
     * })
     * 
     */
    delete<T extends ONGDeleteArgs>(args: SelectSubset<T, ONGDeleteArgs<ExtArgs>>): Prisma__ONGClient<$Result.GetResult<Prisma.$ONGPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ONG.
     * @param {ONGUpdateArgs} args - Arguments to update one ONG.
     * @example
     * // Update one ONG
     * const oNG = await prisma.oNG.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ONGUpdateArgs>(args: SelectSubset<T, ONGUpdateArgs<ExtArgs>>): Prisma__ONGClient<$Result.GetResult<Prisma.$ONGPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ONGS.
     * @param {ONGDeleteManyArgs} args - Arguments to filter ONGS to delete.
     * @example
     * // Delete a few ONGS
     * const { count } = await prisma.oNG.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ONGDeleteManyArgs>(args?: SelectSubset<T, ONGDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ONGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ONGUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ONGS
     * const oNG = await prisma.oNG.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ONGUpdateManyArgs>(args: SelectSubset<T, ONGUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ONG.
     * @param {ONGUpsertArgs} args - Arguments to update or create a ONG.
     * @example
     * // Update or create a ONG
     * const oNG = await prisma.oNG.upsert({
     *   create: {
     *     // ... data to create a ONG
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ONG we want to update
     *   }
     * })
     */
    upsert<T extends ONGUpsertArgs>(args: SelectSubset<T, ONGUpsertArgs<ExtArgs>>): Prisma__ONGClient<$Result.GetResult<Prisma.$ONGPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ONGS that matches the filter.
     * @param {ONGFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const oNG = await prisma.oNG.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ONGFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ONG.
     * @param {ONGAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const oNG = await prisma.oNG.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ONGAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ONGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ONGCountArgs} args - Arguments to filter ONGS to count.
     * @example
     * // Count the number of ONGS
     * const count = await prisma.oNG.count({
     *   where: {
     *     // ... the filter for the ONGS we want to count
     *   }
     * })
    **/
    count<T extends ONGCountArgs>(
      args?: Subset<T, ONGCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ONGCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ONG.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ONGAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ONGAggregateArgs>(args: Subset<T, ONGAggregateArgs>): Prisma.PrismaPromise<GetONGAggregateType<T>>

    /**
     * Group by ONG.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ONGGroupByArgs} args - Group by arguments.
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
      T extends ONGGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ONGGroupByArgs['orderBy'] }
        : { orderBy?: ONGGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ONGGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetONGGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ONG model
   */
  readonly fields: ONGFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ONG.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ONGClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends ONG$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, ONG$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ONG model
   */
  interface ONGFieldRefs {
    readonly id: FieldRef<"ONG", 'String'>
    readonly nome: FieldRef<"ONG", 'String'>
    readonly cnpj: FieldRef<"ONG", 'String'>
    readonly areaAtuacao: FieldRef<"ONG", 'String'>
    readonly anoFundacao: FieldRef<"ONG", 'Int'>
    readonly missao: FieldRef<"ONG", 'String'>
    readonly principaisProjetos: FieldRef<"ONG", 'String'>
    readonly website: FieldRef<"ONG", 'String'>
    readonly telefone: FieldRef<"ONG", 'String'>
    readonly enderecoCompleto: FieldRef<"ONG", 'String'>
    readonly odsTrabalhados: FieldRef<"ONG", 'String[]'>
    readonly principaisNecessidades: FieldRef<"ONG", 'String'>
    readonly numeroBeneficiarios: FieldRef<"ONG", 'Int'>
    readonly numeroVoluntarios: FieldRef<"ONG", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ONG findUnique
   */
  export type ONGFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
    /**
     * Filter, which ONG to fetch.
     */
    where: ONGWhereUniqueInput
  }

  /**
   * ONG findUniqueOrThrow
   */
  export type ONGFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
    /**
     * Filter, which ONG to fetch.
     */
    where: ONGWhereUniqueInput
  }

  /**
   * ONG findFirst
   */
  export type ONGFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
    /**
     * Filter, which ONG to fetch.
     */
    where?: ONGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ONGS to fetch.
     */
    orderBy?: ONGOrderByWithRelationInput | ONGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ONGS.
     */
    cursor?: ONGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ONGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ONGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ONGS.
     */
    distinct?: ONGScalarFieldEnum | ONGScalarFieldEnum[]
  }

  /**
   * ONG findFirstOrThrow
   */
  export type ONGFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
    /**
     * Filter, which ONG to fetch.
     */
    where?: ONGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ONGS to fetch.
     */
    orderBy?: ONGOrderByWithRelationInput | ONGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ONGS.
     */
    cursor?: ONGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ONGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ONGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ONGS.
     */
    distinct?: ONGScalarFieldEnum | ONGScalarFieldEnum[]
  }

  /**
   * ONG findMany
   */
  export type ONGFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
    /**
     * Filter, which ONGS to fetch.
     */
    where?: ONGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ONGS to fetch.
     */
    orderBy?: ONGOrderByWithRelationInput | ONGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ONGS.
     */
    cursor?: ONGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ONGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ONGS.
     */
    skip?: number
    distinct?: ONGScalarFieldEnum | ONGScalarFieldEnum[]
  }

  /**
   * ONG create
   */
  export type ONGCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
    /**
     * The data needed to create a ONG.
     */
    data: XOR<ONGCreateInput, ONGUncheckedCreateInput>
  }

  /**
   * ONG createMany
   */
  export type ONGCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ONGS.
     */
    data: ONGCreateManyInput | ONGCreateManyInput[]
  }

  /**
   * ONG update
   */
  export type ONGUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
    /**
     * The data needed to update a ONG.
     */
    data: XOR<ONGUpdateInput, ONGUncheckedUpdateInput>
    /**
     * Choose, which ONG to update.
     */
    where: ONGWhereUniqueInput
  }

  /**
   * ONG updateMany
   */
  export type ONGUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ONGS.
     */
    data: XOR<ONGUpdateManyMutationInput, ONGUncheckedUpdateManyInput>
    /**
     * Filter which ONGS to update
     */
    where?: ONGWhereInput
    /**
     * Limit how many ONGS to update.
     */
    limit?: number
  }

  /**
   * ONG upsert
   */
  export type ONGUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
    /**
     * The filter to search for the ONG to update in case it exists.
     */
    where: ONGWhereUniqueInput
    /**
     * In case the ONG found by the `where` argument doesn't exist, create a new ONG with this data.
     */
    create: XOR<ONGCreateInput, ONGUncheckedCreateInput>
    /**
     * In case the ONG was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ONGUpdateInput, ONGUncheckedUpdateInput>
  }

  /**
   * ONG delete
   */
  export type ONGDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
    /**
     * Filter which ONG to delete.
     */
    where: ONGWhereUniqueInput
  }

  /**
   * ONG deleteMany
   */
  export type ONGDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ONGS to delete
     */
    where?: ONGWhereInput
    /**
     * Limit how many ONGS to delete.
     */
    limit?: number
  }

  /**
   * ONG findRaw
   */
  export type ONGFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ONG aggregateRaw
   */
  export type ONGAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ONG.usuario
   */
  export type ONG$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * ONG without action
   */
  export type ONGDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ONG
     */
    select?: ONGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ONG
     */
    omit?: ONGOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ONGInclude<ExtArgs> | null
  }


  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    setorAtuacao: string | null
    porteEmpresa: string | null
    descricao: string | null
    website: string | null
    telefone: string | null
    enderecoCompleto: string | null
    porqueApoiarOngs: string | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    setorAtuacao: string | null
    porteEmpresa: string | null
    descricao: string | null
    website: string | null
    telefone: string | null
    enderecoCompleto: string | null
    porqueApoiarOngs: string | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    setorAtuacao: number
    porteEmpresa: number
    descricao: number
    website: number
    telefone: number
    enderecoCompleto: number
    odsInteresse: number
    porqueApoiarOngs: number
    _all: number
  }


  export type EmpresaMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    setorAtuacao?: true
    porteEmpresa?: true
    descricao?: true
    website?: true
    telefone?: true
    enderecoCompleto?: true
    porqueApoiarOngs?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    setorAtuacao?: true
    porteEmpresa?: true
    descricao?: true
    website?: true
    telefone?: true
    enderecoCompleto?: true
    porqueApoiarOngs?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    setorAtuacao?: true
    porteEmpresa?: true
    descricao?: true
    website?: true
    telefone?: true
    enderecoCompleto?: true
    odsInteresse?: true
    porqueApoiarOngs?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: string
    nome: string
    cnpj: string
    setorAtuacao: string
    porteEmpresa: string
    descricao: string
    website: string | null
    telefone: string
    enderecoCompleto: string
    odsInteresse: string[]
    porqueApoiarOngs: string
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    setorAtuacao?: boolean
    porteEmpresa?: boolean
    descricao?: boolean
    website?: boolean
    telefone?: boolean
    enderecoCompleto?: boolean
    odsInteresse?: boolean
    porqueApoiarOngs?: boolean
    usuario?: boolean | Empresa$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>



  export type EmpresaSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    setorAtuacao?: boolean
    porteEmpresa?: boolean
    descricao?: boolean
    website?: boolean
    telefone?: boolean
    enderecoCompleto?: boolean
    odsInteresse?: boolean
    porqueApoiarOngs?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cnpj" | "setorAtuacao" | "porteEmpresa" | "descricao" | "website" | "telefone" | "enderecoCompleto" | "odsInteresse" | "porqueApoiarOngs", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Empresa$usuarioArgs<ExtArgs>
  }

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cnpj: string
      setorAtuacao: string
      porteEmpresa: string
      descricao: string
      website: string | null
      telefone: string
      enderecoCompleto: string
      odsInteresse: string[]
      porqueApoiarOngs: string
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * @param {EmpresaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const empresa = await prisma.empresa.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EmpresaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Empresa.
     * @param {EmpresaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const empresa = await prisma.empresa.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EmpresaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Empresa$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'String'>
    readonly nome: FieldRef<"Empresa", 'String'>
    readonly cnpj: FieldRef<"Empresa", 'String'>
    readonly setorAtuacao: FieldRef<"Empresa", 'String'>
    readonly porteEmpresa: FieldRef<"Empresa", 'String'>
    readonly descricao: FieldRef<"Empresa", 'String'>
    readonly website: FieldRef<"Empresa", 'String'>
    readonly telefone: FieldRef<"Empresa", 'String'>
    readonly enderecoCompleto: FieldRef<"Empresa", 'String'>
    readonly odsInteresse: FieldRef<"Empresa", 'String[]'>
    readonly porqueApoiarOngs: FieldRef<"Empresa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa findRaw
   */
  export type EmpresaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Empresa aggregateRaw
   */
  export type EmpresaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Empresa.usuario
   */
  export type Empresa$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    ongId: 'ongId',
    empresaId: 'empresaId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ONGScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    areaAtuacao: 'areaAtuacao',
    anoFundacao: 'anoFundacao',
    missao: 'missao',
    principaisProjetos: 'principaisProjetos',
    website: 'website',
    telefone: 'telefone',
    enderecoCompleto: 'enderecoCompleto',
    odsTrabalhados: 'odsTrabalhados',
    principaisNecessidades: 'principaisNecessidades',
    numeroBeneficiarios: 'numeroBeneficiarios',
    numeroVoluntarios: 'numeroVoluntarios'
  };

  export type ONGScalarFieldEnum = (typeof ONGScalarFieldEnum)[keyof typeof ONGScalarFieldEnum]


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    setorAtuacao: 'setorAtuacao',
    porteEmpresa: 'porteEmpresa',
    descricao: 'descricao',
    website: 'website',
    telefone: 'telefone',
    enderecoCompleto: 'enderecoCompleto',
    odsInteresse: 'odsInteresse',
    porqueApoiarOngs: 'porqueApoiarOngs'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    role?: StringFilter<"Usuario"> | string
    ongId?: StringNullableFilter<"Usuario"> | string | null
    empresaId?: StringNullableFilter<"Usuario"> | string | null
    ong?: XOR<ONGNullableScalarRelationFilter, ONGWhereInput> | null
    empresa?: XOR<EmpresaNullableScalarRelationFilter, EmpresaWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    ongId?: SortOrder
    empresaId?: SortOrder
    ong?: ONGOrderByWithRelationInput
    empresa?: EmpresaOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    ongId?: string
    empresaId?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    role?: StringFilter<"Usuario"> | string
    ong?: XOR<ONGNullableScalarRelationFilter, ONGWhereInput> | null
    empresa?: XOR<EmpresaNullableScalarRelationFilter, EmpresaWhereInput> | null
  }, "id" | "email" | "ongId" | "empresaId">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    ongId?: SortOrder
    empresaId?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    role?: StringWithAggregatesFilter<"Usuario"> | string
    ongId?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    empresaId?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type ONGWhereInput = {
    AND?: ONGWhereInput | ONGWhereInput[]
    OR?: ONGWhereInput[]
    NOT?: ONGWhereInput | ONGWhereInput[]
    id?: StringFilter<"ONG"> | string
    nome?: StringFilter<"ONG"> | string
    cnpj?: StringFilter<"ONG"> | string
    areaAtuacao?: StringFilter<"ONG"> | string
    anoFundacao?: IntFilter<"ONG"> | number
    missao?: StringFilter<"ONG"> | string
    principaisProjetos?: StringFilter<"ONG"> | string
    website?: StringNullableFilter<"ONG"> | string | null
    telefone?: StringFilter<"ONG"> | string
    enderecoCompleto?: StringFilter<"ONG"> | string
    odsTrabalhados?: StringNullableListFilter<"ONG">
    principaisNecessidades?: StringFilter<"ONG"> | string
    numeroBeneficiarios?: IntNullableFilter<"ONG"> | number | null
    numeroVoluntarios?: IntNullableFilter<"ONG"> | number | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type ONGOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    areaAtuacao?: SortOrder
    anoFundacao?: SortOrder
    missao?: SortOrder
    principaisProjetos?: SortOrder
    website?: SortOrder
    telefone?: SortOrder
    enderecoCompleto?: SortOrder
    odsTrabalhados?: SortOrder
    principaisNecessidades?: SortOrder
    numeroBeneficiarios?: SortOrder
    numeroVoluntarios?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ONGWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: ONGWhereInput | ONGWhereInput[]
    OR?: ONGWhereInput[]
    NOT?: ONGWhereInput | ONGWhereInput[]
    nome?: StringFilter<"ONG"> | string
    areaAtuacao?: StringFilter<"ONG"> | string
    anoFundacao?: IntFilter<"ONG"> | number
    missao?: StringFilter<"ONG"> | string
    principaisProjetos?: StringFilter<"ONG"> | string
    website?: StringNullableFilter<"ONG"> | string | null
    telefone?: StringFilter<"ONG"> | string
    enderecoCompleto?: StringFilter<"ONG"> | string
    odsTrabalhados?: StringNullableListFilter<"ONG">
    principaisNecessidades?: StringFilter<"ONG"> | string
    numeroBeneficiarios?: IntNullableFilter<"ONG"> | number | null
    numeroVoluntarios?: IntNullableFilter<"ONG"> | number | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id" | "cnpj">

  export type ONGOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    areaAtuacao?: SortOrder
    anoFundacao?: SortOrder
    missao?: SortOrder
    principaisProjetos?: SortOrder
    website?: SortOrder
    telefone?: SortOrder
    enderecoCompleto?: SortOrder
    odsTrabalhados?: SortOrder
    principaisNecessidades?: SortOrder
    numeroBeneficiarios?: SortOrder
    numeroVoluntarios?: SortOrder
    _count?: ONGCountOrderByAggregateInput
    _avg?: ONGAvgOrderByAggregateInput
    _max?: ONGMaxOrderByAggregateInput
    _min?: ONGMinOrderByAggregateInput
    _sum?: ONGSumOrderByAggregateInput
  }

  export type ONGScalarWhereWithAggregatesInput = {
    AND?: ONGScalarWhereWithAggregatesInput | ONGScalarWhereWithAggregatesInput[]
    OR?: ONGScalarWhereWithAggregatesInput[]
    NOT?: ONGScalarWhereWithAggregatesInput | ONGScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ONG"> | string
    nome?: StringWithAggregatesFilter<"ONG"> | string
    cnpj?: StringWithAggregatesFilter<"ONG"> | string
    areaAtuacao?: StringWithAggregatesFilter<"ONG"> | string
    anoFundacao?: IntWithAggregatesFilter<"ONG"> | number
    missao?: StringWithAggregatesFilter<"ONG"> | string
    principaisProjetos?: StringWithAggregatesFilter<"ONG"> | string
    website?: StringNullableWithAggregatesFilter<"ONG"> | string | null
    telefone?: StringWithAggregatesFilter<"ONG"> | string
    enderecoCompleto?: StringWithAggregatesFilter<"ONG"> | string
    odsTrabalhados?: StringNullableListFilter<"ONG">
    principaisNecessidades?: StringWithAggregatesFilter<"ONG"> | string
    numeroBeneficiarios?: IntNullableWithAggregatesFilter<"ONG"> | number | null
    numeroVoluntarios?: IntNullableWithAggregatesFilter<"ONG"> | number | null
  }

  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: StringFilter<"Empresa"> | string
    nome?: StringFilter<"Empresa"> | string
    cnpj?: StringFilter<"Empresa"> | string
    setorAtuacao?: StringFilter<"Empresa"> | string
    porteEmpresa?: StringFilter<"Empresa"> | string
    descricao?: StringFilter<"Empresa"> | string
    website?: StringNullableFilter<"Empresa"> | string | null
    telefone?: StringFilter<"Empresa"> | string
    enderecoCompleto?: StringFilter<"Empresa"> | string
    odsInteresse?: StringNullableListFilter<"Empresa">
    porqueApoiarOngs?: StringFilter<"Empresa"> | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    setorAtuacao?: SortOrder
    porteEmpresa?: SortOrder
    descricao?: SortOrder
    website?: SortOrder
    telefone?: SortOrder
    enderecoCompleto?: SortOrder
    odsInteresse?: SortOrder
    porqueApoiarOngs?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    nome?: StringFilter<"Empresa"> | string
    setorAtuacao?: StringFilter<"Empresa"> | string
    porteEmpresa?: StringFilter<"Empresa"> | string
    descricao?: StringFilter<"Empresa"> | string
    website?: StringNullableFilter<"Empresa"> | string | null
    telefone?: StringFilter<"Empresa"> | string
    enderecoCompleto?: StringFilter<"Empresa"> | string
    odsInteresse?: StringNullableListFilter<"Empresa">
    porqueApoiarOngs?: StringFilter<"Empresa"> | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id" | "cnpj">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    setorAtuacao?: SortOrder
    porteEmpresa?: SortOrder
    descricao?: SortOrder
    website?: SortOrder
    telefone?: SortOrder
    enderecoCompleto?: SortOrder
    odsInteresse?: SortOrder
    porqueApoiarOngs?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Empresa"> | string
    nome?: StringWithAggregatesFilter<"Empresa"> | string
    cnpj?: StringWithAggregatesFilter<"Empresa"> | string
    setorAtuacao?: StringWithAggregatesFilter<"Empresa"> | string
    porteEmpresa?: StringWithAggregatesFilter<"Empresa"> | string
    descricao?: StringWithAggregatesFilter<"Empresa"> | string
    website?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    telefone?: StringWithAggregatesFilter<"Empresa"> | string
    enderecoCompleto?: StringWithAggregatesFilter<"Empresa"> | string
    odsInteresse?: StringNullableListFilter<"Empresa">
    porqueApoiarOngs?: StringWithAggregatesFilter<"Empresa"> | string
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    password: string
    role?: string
    ong?: ONGCreateNestedOneWithoutUsuarioInput
    empresa?: EmpresaCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: string
    ongId?: string | null
    empresaId?: string | null
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    ong?: ONGUpdateOneWithoutUsuarioNestedInput
    empresa?: EmpresaUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    ongId?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: string
    ongId?: string | null
    empresaId?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    ongId?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ONGCreateInput = {
    id?: string
    nome: string
    cnpj: string
    areaAtuacao: string
    anoFundacao: number
    missao: string
    principaisProjetos: string
    website?: string | null
    telefone: string
    enderecoCompleto: string
    odsTrabalhados?: ONGCreateodsTrabalhadosInput | string[]
    principaisNecessidades: string
    numeroBeneficiarios?: number | null
    numeroVoluntarios?: number | null
    usuario?: UsuarioCreateNestedOneWithoutOngInput
  }

  export type ONGUncheckedCreateInput = {
    id?: string
    nome: string
    cnpj: string
    areaAtuacao: string
    anoFundacao: number
    missao: string
    principaisProjetos: string
    website?: string | null
    telefone: string
    enderecoCompleto: string
    odsTrabalhados?: ONGCreateodsTrabalhadosInput | string[]
    principaisNecessidades: string
    numeroBeneficiarios?: number | null
    numeroVoluntarios?: number | null
    usuario?: UsuarioUncheckedCreateNestedOneWithoutOngInput
  }

  export type ONGUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    missao?: StringFieldUpdateOperationsInput | string
    principaisProjetos?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsTrabalhados?: ONGUpdateodsTrabalhadosInput | string[]
    principaisNecessidades?: StringFieldUpdateOperationsInput | string
    numeroBeneficiarios?: NullableIntFieldUpdateOperationsInput | number | null
    numeroVoluntarios?: NullableIntFieldUpdateOperationsInput | number | null
    usuario?: UsuarioUpdateOneWithoutOngNestedInput
  }

  export type ONGUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    missao?: StringFieldUpdateOperationsInput | string
    principaisProjetos?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsTrabalhados?: ONGUpdateodsTrabalhadosInput | string[]
    principaisNecessidades?: StringFieldUpdateOperationsInput | string
    numeroBeneficiarios?: NullableIntFieldUpdateOperationsInput | number | null
    numeroVoluntarios?: NullableIntFieldUpdateOperationsInput | number | null
    usuario?: UsuarioUncheckedUpdateOneWithoutOngNestedInput
  }

  export type ONGCreateManyInput = {
    id?: string
    nome: string
    cnpj: string
    areaAtuacao: string
    anoFundacao: number
    missao: string
    principaisProjetos: string
    website?: string | null
    telefone: string
    enderecoCompleto: string
    odsTrabalhados?: ONGCreateodsTrabalhadosInput | string[]
    principaisNecessidades: string
    numeroBeneficiarios?: number | null
    numeroVoluntarios?: number | null
  }

  export type ONGUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    missao?: StringFieldUpdateOperationsInput | string
    principaisProjetos?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsTrabalhados?: ONGUpdateodsTrabalhadosInput | string[]
    principaisNecessidades?: StringFieldUpdateOperationsInput | string
    numeroBeneficiarios?: NullableIntFieldUpdateOperationsInput | number | null
    numeroVoluntarios?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ONGUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    missao?: StringFieldUpdateOperationsInput | string
    principaisProjetos?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsTrabalhados?: ONGUpdateodsTrabalhadosInput | string[]
    principaisNecessidades?: StringFieldUpdateOperationsInput | string
    numeroBeneficiarios?: NullableIntFieldUpdateOperationsInput | number | null
    numeroVoluntarios?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmpresaCreateInput = {
    id?: string
    nome: string
    cnpj: string
    setorAtuacao: string
    porteEmpresa: string
    descricao: string
    website?: string | null
    telefone: string
    enderecoCompleto: string
    odsInteresse?: EmpresaCreateodsInteresseInput | string[]
    porqueApoiarOngs: string
    usuario?: UsuarioCreateNestedOneWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: string
    nome: string
    cnpj: string
    setorAtuacao: string
    porteEmpresa: string
    descricao: string
    website?: string | null
    telefone: string
    enderecoCompleto: string
    odsInteresse?: EmpresaCreateodsInteresseInput | string[]
    porqueApoiarOngs: string
    usuario?: UsuarioUncheckedCreateNestedOneWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    setorAtuacao?: StringFieldUpdateOperationsInput | string
    porteEmpresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsInteresse?: EmpresaUpdateodsInteresseInput | string[]
    porqueApoiarOngs?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    setorAtuacao?: StringFieldUpdateOperationsInput | string
    porteEmpresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsInteresse?: EmpresaUpdateodsInteresseInput | string[]
    porqueApoiarOngs?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUncheckedUpdateOneWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: string
    nome: string
    cnpj: string
    setorAtuacao: string
    porteEmpresa: string
    descricao: string
    website?: string | null
    telefone: string
    enderecoCompleto: string
    odsInteresse?: EmpresaCreateodsInteresseInput | string[]
    porqueApoiarOngs: string
  }

  export type EmpresaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    setorAtuacao?: StringFieldUpdateOperationsInput | string
    porteEmpresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsInteresse?: EmpresaUpdateodsInteresseInput | string[]
    porqueApoiarOngs?: StringFieldUpdateOperationsInput | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    setorAtuacao?: StringFieldUpdateOperationsInput | string
    porteEmpresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsInteresse?: EmpresaUpdateodsInteresseInput | string[]
    porqueApoiarOngs?: StringFieldUpdateOperationsInput | string
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
    isSet?: boolean
  }

  export type ONGNullableScalarRelationFilter = {
    is?: ONGWhereInput | null
    isNot?: ONGWhereInput | null
  }

  export type EmpresaNullableScalarRelationFilter = {
    is?: EmpresaWhereInput | null
    isNot?: EmpresaWhereInput | null
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    ongId?: SortOrder
    empresaId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    ongId?: SortOrder
    empresaId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    ongId?: SortOrder
    empresaId?: SortOrder
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
    isSet?: boolean
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type ONGCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    areaAtuacao?: SortOrder
    anoFundacao?: SortOrder
    missao?: SortOrder
    principaisProjetos?: SortOrder
    website?: SortOrder
    telefone?: SortOrder
    enderecoCompleto?: SortOrder
    odsTrabalhados?: SortOrder
    principaisNecessidades?: SortOrder
    numeroBeneficiarios?: SortOrder
    numeroVoluntarios?: SortOrder
  }

  export type ONGAvgOrderByAggregateInput = {
    anoFundacao?: SortOrder
    numeroBeneficiarios?: SortOrder
    numeroVoluntarios?: SortOrder
  }

  export type ONGMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    areaAtuacao?: SortOrder
    anoFundacao?: SortOrder
    missao?: SortOrder
    principaisProjetos?: SortOrder
    website?: SortOrder
    telefone?: SortOrder
    enderecoCompleto?: SortOrder
    principaisNecessidades?: SortOrder
    numeroBeneficiarios?: SortOrder
    numeroVoluntarios?: SortOrder
  }

  export type ONGMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    areaAtuacao?: SortOrder
    anoFundacao?: SortOrder
    missao?: SortOrder
    principaisProjetos?: SortOrder
    website?: SortOrder
    telefone?: SortOrder
    enderecoCompleto?: SortOrder
    principaisNecessidades?: SortOrder
    numeroBeneficiarios?: SortOrder
    numeroVoluntarios?: SortOrder
  }

  export type ONGSumOrderByAggregateInput = {
    anoFundacao?: SortOrder
    numeroBeneficiarios?: SortOrder
    numeroVoluntarios?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    setorAtuacao?: SortOrder
    porteEmpresa?: SortOrder
    descricao?: SortOrder
    website?: SortOrder
    telefone?: SortOrder
    enderecoCompleto?: SortOrder
    odsInteresse?: SortOrder
    porqueApoiarOngs?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    setorAtuacao?: SortOrder
    porteEmpresa?: SortOrder
    descricao?: SortOrder
    website?: SortOrder
    telefone?: SortOrder
    enderecoCompleto?: SortOrder
    porqueApoiarOngs?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    setorAtuacao?: SortOrder
    porteEmpresa?: SortOrder
    descricao?: SortOrder
    website?: SortOrder
    telefone?: SortOrder
    enderecoCompleto?: SortOrder
    porqueApoiarOngs?: SortOrder
  }

  export type ONGCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ONGCreateWithoutUsuarioInput, ONGUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ONGCreateOrConnectWithoutUsuarioInput
    connect?: ONGWhereUniqueInput
  }

  export type EmpresaCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<EmpresaCreateWithoutUsuarioInput, EmpresaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutUsuarioInput
    connect?: EmpresaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ONGUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ONGCreateWithoutUsuarioInput, ONGUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ONGCreateOrConnectWithoutUsuarioInput
    upsert?: ONGUpsertWithoutUsuarioInput
    disconnect?: boolean
    delete?: ONGWhereInput | boolean
    connect?: ONGWhereUniqueInput
    update?: XOR<XOR<ONGUpdateToOneWithWhereWithoutUsuarioInput, ONGUpdateWithoutUsuarioInput>, ONGUncheckedUpdateWithoutUsuarioInput>
  }

  export type EmpresaUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<EmpresaCreateWithoutUsuarioInput, EmpresaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutUsuarioInput
    upsert?: EmpresaUpsertWithoutUsuarioInput
    disconnect?: boolean
    delete?: EmpresaWhereInput | boolean
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutUsuarioInput, EmpresaUpdateWithoutUsuarioInput>, EmpresaUncheckedUpdateWithoutUsuarioInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ONGCreateodsTrabalhadosInput = {
    set: string[]
  }

  export type UsuarioCreateNestedOneWithoutOngInput = {
    create?: XOR<UsuarioCreateWithoutOngInput, UsuarioUncheckedCreateWithoutOngInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOngInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUncheckedCreateNestedOneWithoutOngInput = {
    create?: XOR<UsuarioCreateWithoutOngInput, UsuarioUncheckedCreateWithoutOngInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOngInput
    connect?: UsuarioWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ONGUpdateodsTrabalhadosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UsuarioUpdateOneWithoutOngNestedInput = {
    create?: XOR<UsuarioCreateWithoutOngInput, UsuarioUncheckedCreateWithoutOngInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOngInput
    upsert?: UsuarioUpsertWithoutOngInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutOngInput, UsuarioUpdateWithoutOngInput>, UsuarioUncheckedUpdateWithoutOngInput>
  }

  export type UsuarioUncheckedUpdateOneWithoutOngNestedInput = {
    create?: XOR<UsuarioCreateWithoutOngInput, UsuarioUncheckedCreateWithoutOngInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOngInput
    upsert?: UsuarioUpsertWithoutOngInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutOngInput, UsuarioUpdateWithoutOngInput>, UsuarioUncheckedUpdateWithoutOngInput>
  }

  export type EmpresaCreateodsInteresseInput = {
    set: string[]
  }

  export type UsuarioCreateNestedOneWithoutEmpresaInput = {
    create?: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpresaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUncheckedCreateNestedOneWithoutEmpresaInput = {
    create?: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpresaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EmpresaUpdateodsInteresseInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UsuarioUpdateOneWithoutEmpresaNestedInput = {
    create?: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpresaInput
    upsert?: UsuarioUpsertWithoutEmpresaInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEmpresaInput, UsuarioUpdateWithoutEmpresaInput>, UsuarioUncheckedUpdateWithoutEmpresaInput>
  }

  export type UsuarioUncheckedUpdateOneWithoutEmpresaNestedInput = {
    create?: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpresaInput
    upsert?: UsuarioUpsertWithoutEmpresaInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEmpresaInput, UsuarioUpdateWithoutEmpresaInput>, UsuarioUncheckedUpdateWithoutEmpresaInput>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ONGCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    cnpj: string
    areaAtuacao: string
    anoFundacao: number
    missao: string
    principaisProjetos: string
    website?: string | null
    telefone: string
    enderecoCompleto: string
    odsTrabalhados?: ONGCreateodsTrabalhadosInput | string[]
    principaisNecessidades: string
    numeroBeneficiarios?: number | null
    numeroVoluntarios?: number | null
  }

  export type ONGUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    cnpj: string
    areaAtuacao: string
    anoFundacao: number
    missao: string
    principaisProjetos: string
    website?: string | null
    telefone: string
    enderecoCompleto: string
    odsTrabalhados?: ONGCreateodsTrabalhadosInput | string[]
    principaisNecessidades: string
    numeroBeneficiarios?: number | null
    numeroVoluntarios?: number | null
  }

  export type ONGCreateOrConnectWithoutUsuarioInput = {
    where: ONGWhereUniqueInput
    create: XOR<ONGCreateWithoutUsuarioInput, ONGUncheckedCreateWithoutUsuarioInput>
  }

  export type EmpresaCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    cnpj: string
    setorAtuacao: string
    porteEmpresa: string
    descricao: string
    website?: string | null
    telefone: string
    enderecoCompleto: string
    odsInteresse?: EmpresaCreateodsInteresseInput | string[]
    porqueApoiarOngs: string
  }

  export type EmpresaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    cnpj: string
    setorAtuacao: string
    porteEmpresa: string
    descricao: string
    website?: string | null
    telefone: string
    enderecoCompleto: string
    odsInteresse?: EmpresaCreateodsInteresseInput | string[]
    porqueApoiarOngs: string
  }

  export type EmpresaCreateOrConnectWithoutUsuarioInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutUsuarioInput, EmpresaUncheckedCreateWithoutUsuarioInput>
  }

  export type ONGUpsertWithoutUsuarioInput = {
    update: XOR<ONGUpdateWithoutUsuarioInput, ONGUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ONGCreateWithoutUsuarioInput, ONGUncheckedCreateWithoutUsuarioInput>
    where?: ONGWhereInput
  }

  export type ONGUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ONGWhereInput
    data: XOR<ONGUpdateWithoutUsuarioInput, ONGUncheckedUpdateWithoutUsuarioInput>
  }

  export type ONGUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    missao?: StringFieldUpdateOperationsInput | string
    principaisProjetos?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsTrabalhados?: ONGUpdateodsTrabalhadosInput | string[]
    principaisNecessidades?: StringFieldUpdateOperationsInput | string
    numeroBeneficiarios?: NullableIntFieldUpdateOperationsInput | number | null
    numeroVoluntarios?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ONGUncheckedUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    anoFundacao?: IntFieldUpdateOperationsInput | number
    missao?: StringFieldUpdateOperationsInput | string
    principaisProjetos?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsTrabalhados?: ONGUpdateodsTrabalhadosInput | string[]
    principaisNecessidades?: StringFieldUpdateOperationsInput | string
    numeroBeneficiarios?: NullableIntFieldUpdateOperationsInput | number | null
    numeroVoluntarios?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmpresaUpsertWithoutUsuarioInput = {
    update: XOR<EmpresaUpdateWithoutUsuarioInput, EmpresaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EmpresaCreateWithoutUsuarioInput, EmpresaUncheckedCreateWithoutUsuarioInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutUsuarioInput, EmpresaUncheckedUpdateWithoutUsuarioInput>
  }

  export type EmpresaUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    setorAtuacao?: StringFieldUpdateOperationsInput | string
    porteEmpresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsInteresse?: EmpresaUpdateodsInteresseInput | string[]
    porqueApoiarOngs?: StringFieldUpdateOperationsInput | string
  }

  export type EmpresaUncheckedUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    setorAtuacao?: StringFieldUpdateOperationsInput | string
    porteEmpresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    enderecoCompleto?: StringFieldUpdateOperationsInput | string
    odsInteresse?: EmpresaUpdateodsInteresseInput | string[]
    porqueApoiarOngs?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateWithoutOngInput = {
    id?: string
    email: string
    password: string
    role?: string
    empresa?: EmpresaCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutOngInput = {
    id?: string
    email: string
    password: string
    role?: string
    empresaId?: string | null
  }

  export type UsuarioCreateOrConnectWithoutOngInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutOngInput, UsuarioUncheckedCreateWithoutOngInput>
  }

  export type UsuarioUpsertWithoutOngInput = {
    update: XOR<UsuarioUpdateWithoutOngInput, UsuarioUncheckedUpdateWithoutOngInput>
    create: XOR<UsuarioCreateWithoutOngInput, UsuarioUncheckedCreateWithoutOngInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutOngInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutOngInput, UsuarioUncheckedUpdateWithoutOngInput>
  }

  export type UsuarioUpdateWithoutOngInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    empresa?: EmpresaUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutOngInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    empresaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateWithoutEmpresaInput = {
    id?: string
    email: string
    password: string
    role?: string
    ong?: ONGCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEmpresaInput = {
    id?: string
    email: string
    password: string
    role?: string
    ongId?: string | null
  }

  export type UsuarioCreateOrConnectWithoutEmpresaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput>
  }

  export type UsuarioUpsertWithoutEmpresaInput = {
    update: XOR<UsuarioUpdateWithoutEmpresaInput, UsuarioUncheckedUpdateWithoutEmpresaInput>
    create: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEmpresaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEmpresaInput, UsuarioUncheckedUpdateWithoutEmpresaInput>
  }

  export type UsuarioUpdateWithoutEmpresaInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    ong?: ONGUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEmpresaInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    ongId?: NullableStringFieldUpdateOperationsInput | string | null
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