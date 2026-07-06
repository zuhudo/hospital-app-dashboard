import { User, Bell, Shield } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function Settings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account and application preferences</p>
      </div>

      {/* Profile */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <User className="w-5 h-5 text-primary-600" />
          <h2 className="text-lg font-semibold">Profile Settings</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input label="First Name" defaultValue="Admin" />
          <Input label="Last Name" defaultValue="User" />
          <Input label="Email" defaultValue="admin@hospital.com" type="email" />
          <Input label="Phone" defaultValue="+1234567890" type="tel" />
        </div>
        <div className="mt-6 flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </Card>

      {/* Notifications */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-5 h-5 text-primary-600" />
          <h2 className="text-lg font-semibold">Notifications</h2>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Email notifications', desc: 'Receive email for new appointments' },
            { label: 'Push notifications', desc: 'Browser push notifications' },
            { label: 'SMS alerts', desc: 'Text messages for urgent updates' },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-900">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-primary-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500" />
              </label>
            </div>
          ))}
        </div>
      </Card>

      {/* Security */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-5 h-5 text-primary-600" />
          <h2 className="text-lg font-semibold">Security</h2>
        </div>
        <div className="space-y-4">
          <Input label="Current Password" type="password" placeholder="Enter current password" />
          <Input label="New Password" type="password" placeholder="Enter new password" />
          <Input label="Confirm Password" type="password" placeholder="Confirm new password" />
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="secondary">Update Password</Button>
        </div>
      </Card>
    </div>
  );
}
