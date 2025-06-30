
    export type RemoteKeys = 'remote_2';
    type PackageType<T> = T extends 'remote_2' ? typeof import('remote_2') :any;