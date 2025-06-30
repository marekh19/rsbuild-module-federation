
    export type RemoteKeys = 'shell/counterStore';
    type PackageType<T> = T extends 'shell/counterStore' ? typeof import('shell/counterStore') :any;