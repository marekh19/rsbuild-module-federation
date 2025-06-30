
    export type RemoteKeys = 'remote_1';
    type PackageType<T> = T extends 'remote_1' ? typeof import('remote_1') :any;